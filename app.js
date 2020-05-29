// Main app to control functionality in the program

// Add keypress Event Listner to regex input
document.querySelector('#regex-text').addEventListener('keyup', e => { 
  // Create the ui object. 
  const ui = new UI(); 

  // Remove all output text if the Regex is empty. 
  if (ui.regexString === '') { 
    ui.removeOutput(); 
  }

  // Create the Regex Object 
  try { 
    if (ui.accptedFlags.includes(ui.flagString)) { 
      // Perform the search 
      const regex = new RegExp(ui.regexString, ui.flagString); 
      const matches = regex.exec(ui.testString); 
      if (matches[0]) { 
        const matchedList = ui.createListItem(matches); 
        ui.createOutputCard(matchedList); 
      }
    } else { 
      // Create a notification that the flag is invalid. 
      ui.createAlertMessage('Invalid Flag', 'error'); 
    }
    
  } catch (e) { 
    // Create an error message when there isn't a match. 
    console.log('Something went Wrong'); 
    }; 
  
})

