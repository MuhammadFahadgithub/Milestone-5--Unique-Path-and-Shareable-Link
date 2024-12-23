// listing element 
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get reference to form rlements using yheir IDs.
const profilPictureInput= document.getElementById(
    "profilePicture"
) as HTMLAnchorElement;
    const profilPictureInput= document.getElementById('profilePicture') as HTMLInputElement;
  
    
    const nameElement = document.getElementById(`name`) as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
  
  // **
  const usernameElement=document.getElementById(
    "username")
    as HTMLElement;
    if (profilPictureInput && nameElement && emailElement && phoneElement && experienceElement && skillsElement) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

      // 

      const username= usernameElement.value;
      const uniquePath= 'resumes/$(username.repace(/\s+/g,'_')}_cv.html'
  
      // Picture elements
    const profilePictureFile = profilPictureInput.files?.[0]
    const profilePictureURL = profilePictureFile 
    ? URL.createObjectURL(profilePictureFile)
    :'';
    
  
      //Create Resume output
      const resumeOutput = `
   <h2>Resume<h2>
  ${profilePictureURL ? '<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">':''}
  <p><strong>Name:</strong> ${name} </span></p>
   <p><strong>Email:</strong> ${email} </p>
   <p><strong>Phone Number:</strong>${phone} </p>
  
   <h3>Education</h3>
   <p>${education}</p>
  
   <h3>Experience</h3>
   <p>${experience}</p>
  
   <h3>Skills</h3>
   <p>${skills}</p>
  
   `;
  // 
  const downloadLink = document.createElement('a')
  downloadLink.href='data:text/html;charset=utf-8' + encodeURIComponent(resumeOutput)
  downloadLink.download=uniquePath
  downloadLink.textContent = 'Download Your 2024 Resume';
  
  
      //  Dispay the resume output
      const resumeOutputElement = document.getElementById(`resumeOutput`)
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        makeEditabe();
      } else {
        console.error(`the resume output elements are missing`)
      }
    }
  });
  
  function makeEditabe() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
      element.addEventListener('click', function () {
        const currrentElement = element as HTMLElement;
        const currrentValue = currrentElement.textContent || "";
  
        // repace content
        if (currrentElement.tagName === "p" || currrentElement.tagName === 'SPAN') {
          const input = document.createElement('input')
          input.type='text'
          input.value = currrentValue
          input.classList.add('editing-input')
  
         input.addEventListener('blur', function(){})
         currrentElement.textContent= input.value;
         currrentElement.style.display='inline'
         input.remove()
  
          currrentElement.style.display='none'
          currrentElement.parentNode?.insertBefore(input, currrentElement)
            input.focus()}
  }) })
        }
  
  