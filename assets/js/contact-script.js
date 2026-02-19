    const scriptURL = 'https://script.google.com/macros/s/AKfycbz98AzUjO3AIsfPQ6b24pKzAkvWkwnOn2Rr_6-2VB_fsd4UWyznIha2TwxYNGe7nOnucA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })