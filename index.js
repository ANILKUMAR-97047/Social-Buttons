const Button = props => {
  //  Write your code here.

  const {className, content} = props
  return <button className={className}>{content}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='social-buttons-heading'>Social Buttons</h1>
    <div className='buttons-container'>
      <Button className='like-button' content='Like' />
      <Button className='comment-button' content='Comment' />
      <Button className='share-button' content='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
