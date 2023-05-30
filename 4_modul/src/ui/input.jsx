const Input = ({ label, type ='text', setState }) => {
    return (
        <div>  <div class="form-floating">
            <input type={type} onChange={e => setState(e.target.value)} class="form-control" id="floatingInput" placeholder={label} />
            <label for="floatingInput">{label}</label>
        </div></div>
    )
}

export default Input