const CLASS_LIST = {
	MODAL: 'modal',
	MODAL_ACTIVE: 'modal__active',
	MODAL_HAS_SCROLL: 'modal--has-scroll',
	MODAL_DIALOG_BODY: 'modal__dialog-body',
	TRIGGER_OPEN: 'js-modal-open',
	TRIGGER_CLOSE: 'js-modal-close'
}

document.addEventListener('click', (event) => {

	if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
		console.log('open')
		event.preventDefault()

		const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)
		const modalId = target.getAttribute('href').replace('#', '')
		const modal = document.getElementById(modalId)

		document.body.style.marginRight = `${CLASS_LIST.TRIGGER_OPEN}`
		document.body.style.overflow = 'hidden'

		modal.classList.add(CLASS_LIST.MODAL_ACTIVE)

	}

	if (event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
		event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
	) {
		console.log('close')
		event.preventDefault()


		const modal = event.target.closest(`.${CLASS_LIST.MODAL}`)

		modal.classList.remove(CLASS_LIST.MODAL_ACTIVE)

	}
})

const getScrollbarWidth = () => {
	const item = document.createElement('div')

	item.style.position = 'absolute'
	item.style.top = '-99999px'
	item.style.width = '50px'
	item.style.height = '50px'
	item.style.overflow = 'scroll'
	item.style.visibility = 'hidden'

	document.body.appendChild(item)
	const scrollBarWidth = item.offsetWidth - item.clientWidth
	document.body.removeChild(item)
	return scrollBarWidth
}