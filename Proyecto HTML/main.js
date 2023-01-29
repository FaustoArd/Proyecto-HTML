const emailModal = document.getElementById('emailModal')
emailModal.addEventListener('show.bs.modal', event => {
  
  const button = event.relatedTarget
  const recipient = button.getAttribute('data-bs-whatever')
  const modalTitle = emailModal.querySelector('.modal-title')
  const modalBodyInput = emailModal.querySelector('.modal-body input')
  modalTitle.textContent = `Mensaje nuevo ${recipient}`
  modalBodyInput.value = recipient
})

function enviar_mail() {
	alert("Mail enviado!!");
}

