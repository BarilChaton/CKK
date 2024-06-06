import { dispatch, setReady } from './redux/actions'
import { connect } from 'react-redux'
import { useLayoutEffect } from 'react'

const App = (props) => {
  const { ready, setReady, dispatch } = props
  const newProps = { dispatch }

  useLayoutEffect(() => { // Mount
    if (ready) {
      return
    }

    setReady(true)
  }, [ready, setReady])

  return (
    <div className='appContentBox'>

    </div>
  )
}

export default connect(state => ({

}), { dispatch, setReady })(App)
