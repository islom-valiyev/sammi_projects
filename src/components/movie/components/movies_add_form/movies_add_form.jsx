import './movies_add_form.css'
const moviesAddForm = () => {
  return (
    <div className='movies-add-form'>
      <h3>Yangi kino qushish</h3>
      <form className='add-form d-flex'>
        <input type="text" className='form-control new-post-label' placeholder='Qanday kino' />
        <input type="number" className='form-control new-post-label' placeholder='Nechi marotaba kurilgan'  />
        <button type="submit" className='btn btn-outline-dark'>
            Qushish
        </button>
      </form> 
    </div>
  )
}

export default moviesAddForm
