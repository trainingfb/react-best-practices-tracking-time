/*
	! DO NOT USE THIS AT HOME !
	This is just a simple global state container, used to avoid
	adding a state manager or using the context API at this stage.
*/

class TrackingStore {
	constructor() {
		this.tasks = []

		this.listeners = []
	}

	addListener(listener) {
		this.listeners = [...this.listeners, listener]
	}

	removeListener(listener) {
		this.listeners = this.listeners.filter(l => l !== listener)
	}

	setTasks(tasks) {
		this.tasks = tasks

		this.listeners.forEach(listener => {
			listener(this.tasks)
		})
	}
}

export default new TrackingStore()
