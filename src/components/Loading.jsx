import './Loading.css'

const Loading = () => {
  return (
    <div className="loading-container" data-testid="loading">
      <div className="loading-spinner" data-testid="loading-spinner" role="status" aria-label="Loading">
        <div className="spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  )
}

export default Loading
