class UI { 
  constructor() { 
    // Get the test and regex variables. 
    this.testString = document.getElementById('input-text').value; 
    this.flagString = document.getElementById('flag-text').value; 
    this.regexString = document.getElementById('regex-text').value; 
    this.output = document.getElementById('output'); 
    this.accptedFlags = ['i', 'g', 'm', 's', 'u', 'y', '']; 
  }

  createOutputCard(listOfMatches) {
    // Clear the output 
    this.output.innerHTML = ''; 

    // Create the card element. 
    const card = document.createElement('div'); 
    card.setAttribute('class', 'card text-black mt-3'); 

    card.setAttribute('id', 'output-card'); 

    // Create the elements to go into the card element. 
    const cardBody = document.createElement('div'); 
    cardBody.setAttribute('class', 'card-body'); 
    
    // Add the output elements to the card body. 
    cardBody.appendChild(listOfMatches); 

    card.appendChild(cardBody); 

    // Set the constructor value to the output card 

    // Append the element to the output 
    this.output.appendChild(card); 

  }
  
  
  // Create the list item with the matches. 
  createListItem(matches) { 

    // Create full match placeholder. 
    const fullMatch = document.createElement('li'); 
    fullMatch.setAttribute('class', 'list-group list-group-flush'); 
    fullMatch.textContent = 'Full Match';



    const listContainer = document.createElement('ul'); 
    listContainer.setAttribute('class', 'list-group list-group-flush');

    // Loop through the matches and add individual list items. 
    this.createColoredMatchList(listContainer, matches); 

    return listContainer

  }


  // Function to create the color coordination of the elements
  createColoredMatchList(listContainer, matches) { 
    // This will strip the matches into 
    for (let i = 0; i < matches.length; i ++) { 
      // Generate three random color numbers 
      // This will set the stage for 
      const red = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const full_rgb = `rgb(${red}, ${green}, ${blue})`; 




      // Create Header Label for Each Match
      const header = document.createElement('p'); 
      header.setAttribute('class', 'text-primary mt-3 my-2'); 
      if (i===0) { 
        header.textContent = 'Full Match';
        header.setAttribute('id', 'full-match Header');  
      } else { 
        header.textContent = `Group ${i}`; 
      }
      // Create the body of the list items except the full match. 
      listContainer.appendChild(header)
      const listItem = document.createElement('li'); 
      listItem.setAttribute('class', 'list-group-item'); 
      listItem.textContent = matches[i]; 
      listItem.style.color = full_rgb;

      // Have an easy way of selecting for the fullmatch 
      if (i === 0) { 
        listItem.setAttribute('id', 'full-match'); 
      }
      
      // Append the list items to the cotntainer
      listContainer.appendChild(listItem); 
    }

  }

  // This function will take the full match and manipulate it so that it will color code the full match object. 
  fullMatchEditor() { 

  }


  // Remove the output card
  removeOutput() { 
    while (this.output.firstChild) { 
      this.output.removeChild(this.output.lastChild); 
    }

  } 


  createAlertMessage(message, className) { 
    const div = document.createElement('div'); 
    div.textContent = message; 


    // Choose the container and append child 
    const mainDiv = document.getElementById('main-container'); 
    mainDiv.prepend(div); 


  }
}