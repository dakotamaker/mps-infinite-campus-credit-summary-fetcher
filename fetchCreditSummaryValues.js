const getCredits = () => {
     const whitespaceRegex = / /g

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
          "11 - Career Readiness": 0,
          "12 - Total": 0
     }

     const tableValueArrays = Array.from(workspaceDetailDocument.querySelectorAll('.detailFormColumn')).map(node => node.parentElement.textContent.replace(whitespaceRegex,'').split('\n'))

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
               case "SOCIAL STUDIES".replace(whitespaceRegex,''):
                    result["04 - Social Studies"] = creditValue
                    break
               case "HEALTH":
                    result["05 - Health"] = creditValue
                    break
               case "PHYSICAL EDUCATION".replace(whitespaceRegex,''):
                    result["06 - Phy Ed"] = creditValue
                    break
               case "FINE ARTS".replace(whitespaceRegex,''):
                    result["07 - Fine Arts"] = creditValue
                    break
               case "OTHER ELECTIVE".replace(whitespaceRegex,''):
                    result["08 - Electives"] = creditValue
                    break
               case "SERVICE/ONLINE/COMM SERV".replace(whitespaceRegex,''):
                    result["09 - Service Learning"] = creditValue
                    break
               case "FOREIGN LANGUAGE".replace(whitespaceRegex,''):
                    result["10 - World Language"] = creditValue
                    break   
               case "COLLEGE AND CAREER READINESS".replace(whitespaceRegex,''):
                    result["11 - Career Readiness"] = creditValue
                    break   
          }
     })

     const transcriptFormValueArrays = Array.from(workspaceDetailDocument.querySelectorAll('.transcriptFormColumn')).map(node => node.parentElement.textContent.replace(whitespaceRegex,'').split('\n'))
     const totalCreditRow = transcriptFormValueArrays[transcriptFormValueArrays.length - 1]
     const totalCreditValue = parseFloat(totalCreditRow[totalCreditRow.length - 2])

     result["12 - Total"] = totalCreditValue

     console.table(result)
 }
 