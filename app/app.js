const button = document.getElementById("bnt");


const callWpp = (e) =>  {
  e.preventDefault()
  const name = document.getElementById("name").value;
  const emailw = document.getElementById("email").value;
  let texto = `    Olá, meu nome é ${name}, estou entrando em contato por meio do seu site,
  gostaria de mais informações sobre seus planos. Email de contato é ${emailw}`

  window.location.href = `https://api.whatsapp.com/send?phone=+5567984186601&text=${texto}`
}

button.addEventListener("click", callWpp)



