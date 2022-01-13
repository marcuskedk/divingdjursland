import React from 'react'

const Admin = () => {
    return (
        <>
            <section>
                <div className="container">
                    <form className='row justify-content-center'>
                        <div className="col-lg-6">
                            <input type="email" placeholder='Email...' />
                        </div>
                        <div className="col-lg-6">
                            <input type="password" placeholder='Adgangskode...' />
                        </div>
                        <div className="col-lg-6">
                            <button name='login'>Log ind</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Admin
