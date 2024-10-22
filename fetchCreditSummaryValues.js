const getCredits = () => {
    let initialIframe = document.querySelector('#frameWorkspace')
    let initialIframeDocument = initialIframe.contentDocument || initialIframe.contentWindow.document;
    
    let workspaceWrapperIframe = initialIframeDocument.querySelector('#frameWorkspaceWrapper')
    let  workspaceWrapperDocument = workspaceWrapperIframe.contentDocument || workspaceWrapperIframe.contentWindow.document;
 
    let workspaceDetailIframe = workspaceWrapperDocument.querySelector('#frameWorkspaceDetail')
    let workspaceDetailDocument = workspaceDetailIframe.contentDocument || workspaceWrapperIframe.contentWindow.document;
 
     let result = {
         "01 - English": 0,
         "02 - Math": 0,
         "03 - Science": 0,
         "04 - Social Studies": 0,
         "05 - Health": 0,
         "06 - Phy Ed": 0,
         "07 - Fine Arts": 0,
         "08 - Electives": 0,
         "09 - Service Learning": 0,
         "10 - Career Readiness": 0,
         "11 - World Language": 0
     }
 
     const tableValueArrays = Array.from(workspaceDetailDocument .querySelectorAll('.detailFormColumn')).map(node => node.parentElement.textContent.replace(/ /g,'').split('\n'))
 
     tableValueArrays.forEach(tableValueArray => {
         const className = tableValueArray[1]
         const creditValue = tableValueArray[tableValueArray.length - 2]
 
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
              case "COLLEGEANDCAREERREADINESS":
                 result["10 - Career Readiness"] = creditValue
                 break
             case "FOREIGNLANGUAGE":
                 result["11 - World Language"] = creditValue
                 break        
         }
     })
 
     console.log(result)
 }
 