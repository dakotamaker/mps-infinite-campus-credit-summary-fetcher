const getCredits = () => {
    let initialIframe = document.querySelector('#frameWorkspace')
    let initialIframeDocument = initialIframe.contentDocument || initialIframe.contentWindow.document;
    
    let workspaceWrapperIframe = initialIframeDocument.querySelector('#frameWorkspaceWrapper')
    let workspaceWrapperDocument = workspaceWrapperIframe.contentDocument || workspaceWrapperIframe.contentWindow.document;
 
    let workspaceHeaderIframe =  workspaceWrapperDocument.querySelector("#frameWorkspaceHeader")
    let workspaceHeaderDocument = workspaceHeaderIframe.contentDocument || workspaceHeaderIframe.contentWindow.document;

    let studentNameElement = workspaceHeaderDocument.querySelector('.topBar h1')
    let studentName = studentNameElement.innerText.trim()

    let workspaceDetailIframe = workspaceWrapperDocument.querySelector('#frameWorkspaceDetail')
    let workspaceDetailDocument = workspaceDetailIframe.contentDocument || workspaceWrapperIframe.contentWindow.document;
 
     let result = {
        "00 - Student Name": studentName,
        "01 - English": 0,
        "02 - Math": 0,
        "03 - Science": 0,
        "04 - Social Studies": 0,
        "05 - Health": 0,
        "06 - Phy Ed": 0,
        "07 - Fine Arts": 0,
        "08 - Electives": 0,
        "09 - Service Learning": 0,
        "10 - World Language": 0,
        "11 - Career Readiness": 0
     }
 
     const tableValueArrays = Array.from(workspaceDetailDocument .querySelectorAll('.detailFormColumn')).map(node => node.parentElement.textContent.replace(/ /g,'').split('\n'))
 
     tableValueArrays.forEach(tableValueArray => {
         const className = tableValueArray[1]
         const creditValue = parseFloat(tableValueArray[tableValueArray.length - 2])
 
         switch(className) {
            case "ENGLISH":
                 result["01 - English"] = creditValue
                 break
            case "MATH":
                 result["02 - Math"] = creditValue
                 break
            case "SCIENCE":
                 result["03 - Science"] = creditValue
                 break
            case "SOCIALSTUDIES":
                 result["04 - Social Studies"] = creditValue
                 break
            case "HEALTH":
                 result["05 - Health"] = creditValue
                 break
            case "PHYSICALEDUCATION":
                 result["06 - Phy Ed"] = creditValue
                 break
            case "FINEARTS":
                 result["07 - Fine Arts"] = creditValue
                 break
            case "OTHERELECTIVE":
                 result["08 - Electives"] = creditValue
                 break
            case "SERVICE/ONLINE/COMMSERV":
                 result["09 - Service Learning"] = creditValue
                 break
            case "FOREIGNLANGUAGE":
                 result["10 - World Language"] = creditValue
                 break   
            case "COLLEGEANDCAREERREADINESS":
                result["11 - Career Readiness"] = creditValue
                break     
         }
     })
 
     console.table(result)
 }
 