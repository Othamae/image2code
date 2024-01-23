'use client'
import { STEPS } from '@/lib/const'
import { streamReader, toBase64 } from '@/lib/helpers'
import { useState } from 'react'
import Code from './Code'
import DragAndDrop from './DragAndDrop'
import Form from './Form'
import Loading from './Loading'

const Main = () => {
    const [result, setResult] = useState('')
    const [step, setStep] = useState(STEPS.INITIAL)

    const transform2Code = async (body: string) => {
        setStep(STEPS.LOADING)
        const res = await fetch('/api/generate-code-from-img', {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res.ok || res.body === null) {
            setStep(STEPS.ERROR)
            throw new Error('Error generating the code')
        }

        setStep(STEPS.PREVIEW)

        // lee el streaming de datos desde la funcion generadora
        for await (const chunk of streamReader(res)) {
            setResult(prev => prev + chunk)
        }

    }

    const transformImgToCode = async (file: File) => {
        const base64Img = await toBase64(file)
        await transform2Code(JSON.stringify({ base64Img }))
    }

    const transformURL2Code = async (url: string) => {
        await transform2Code(JSON.stringify({ url }))
    }

    const [background, html = ''] = result.split('|||')
    return (
        <main className="">
            <section className="max-w-5xl w-full mx-auto p-10">
                {
                    step === STEPS.LOADING && (
                        <Loading></Loading>
                    )
                }
                {
                    step === STEPS.INITIAL && (
                        <div className="flex flex-col gap-4">
                            <DragAndDrop transformImgToCode={transformImgToCode}></DragAndDrop>
                            <Form transformURL2Code={transformURL2Code} />
                        </div>
                    )
                }
                {
                    step === STEPS.PREVIEW && (
                        <Code html={html} background={background}></Code>

                    )
                }
            </section>
        </main>
    )
}

export default Main