import './contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="left"></div>
        <form>
            <div className="doubleInput">
                <div className="input">
                    <label htmlFor="">First Name</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label htmlFor="">Last Name</label>
                    <input type="text" />
                </div>
            </div>

            <div className="doubleInput">
                <div className="input">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label htmlFor="">Subject</label>
                    <input type="text" />
                </div>
            </div>
            <div className="input">
                <label htmlFor="">Message</label>
                <textarea name="" id=""></textarea>
            </div>

            <button>Send</button>
        </form>
    </div>
  )
}

export default Contact