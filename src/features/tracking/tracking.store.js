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
