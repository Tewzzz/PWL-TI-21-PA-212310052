import React from 'react';

 export default function Authentifications() {
    return (
        <div className='d-flex justify-content-center bg-primary p-4 vh-100'>
        <main className="form-signin w-50 m-auto bg-white p-4 m-4 rounded-2">
        <form>

          <h1 class="mb-3 fw-bold text-center">Sign in</h1>
          <h3 className='mb-5 text-secondary text-center text-gray'>Enter using your IBIK Account</h3>
      
          <div class="mb-3 form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="mb-3 form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
      
          <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
        </form>
      </main>
      <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </div>
    );
}



