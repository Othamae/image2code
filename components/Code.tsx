
const Code = ({ html, background }: { html: string, background?: string }) => {
    return (
        <div className="rounded  flex flex-col gap-4">
            <div
                className="w-full h-full border-4 rounded border-gray-700 aspect-video"
                style={{ backgroundColor: `#${background ? background.trim() : 'fff'}` }}
            >
                <iframe srcDoc={html} className="w-full h-full" />
            </div>
            <pre className="mt-10">
                <code>{html}</code>
            </pre>
        </div>
    )
}

export default Code