'use client'
import { Dropzone, ExtFile } from '@files-ui/react'

const DragAndDrop = ({ transformImgToCode }: { transformImgToCode: (file: File) => Promise<void> }) => {
    // const [files, setFiles] = useState<ExtFile[]>([])
    const updateFiles = (files: ExtFile[]) => {
        //  setFiles(files)
        const file = files[0].file
        if (file != null) transformImgToCode(file)
    }
    return (
        <Dropzone
            header={false}
            footer={false}
            maxFiles={1}
            accept='image/*'
            onChange={updateFiles}
        >
            {/* {files?.map((file, index) => {
                return <FileMosaic key={index} {...file} preview />
            })} */}
        </Dropzone>

    )
}

export default DragAndDrop