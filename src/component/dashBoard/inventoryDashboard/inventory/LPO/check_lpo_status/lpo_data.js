export const cssProperties = {
        generated : {
            gradient: "linear-gradient( 165deg,  #4a15e6 35%, white 35%, white 100% )" ,
            title: "#291563",
            textColor: "#ffff"
        },
        open : {
            gradient: "linear-gradient( 165deg,  #f0e626 35%, white 35%, white 100% )" ,
            title: "#fcba03",
            textColor: "#291563"
        },
        closed : {
            gradient: "linear-gradient( 165deg,  #48f026 35%, white 35%, white 100% )" ,
            title: "#48ad34",
            textColor: "#ffff"
        },
    }

export const getGeneratedLpoData = (lpodata) => {
    return {
        title: "generated" ,
        processTotalAmount: lpodata.getTotalAmountOfLposGenerated  ,
        processLpoSummary: lpodata.getGeneratedLposSummaries ,
    }
}

export const getOpenData = (lpodata) => {
    return {
        title: "open" ,
        processTotalAmount: lpodata.getTotalAmountOfLposGenerated  ,
        processLpoSummary: lpodata.getGeneratedLposSummaries ,
    }
}

export const getClosedData = (lpodata) => {
    return {
        title: "closed" ,
        processTotalAmount: lpodata.getTotalAmountOfClosedLpos ,
        processLpoSummary: lpodata.getClosedLposSummaries ,
    }
}    