import React from 'react'
import { FunctionComponent } from 'react'

// Not fullscreen mode
const AppBaseLayout: FunctionComponent = ({ children }) => {
  return <div>{children}</div>
}

// App layout
const AppLayout: FunctionComponent = ({ children }) => {
  const isFullScreen = localStorage.getItem('IS_FULLSCREEN')

  if (isFullScreen) return <div>{children}</div>
  return <AppBaseLayout>{children}</AppBaseLayout>
}

export default AppLayout
