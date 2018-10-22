import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'animate.css/animate.css'
import route from 'riot-route'
import * as app from './app'

riot.mount(app)

// Route the front page
route('/', () => {
  riot.mount('page', 'home')
})

// required for riot-router to start
route.start(true)
