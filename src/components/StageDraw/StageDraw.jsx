import "./StageDraw.css"


export const StageDraw = ({stage_id}) => {


    return(
        <div className="stage-container">
        <pre className="ascrii-art">{stage_id}</pre>
        </div>
    )
}