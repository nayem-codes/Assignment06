import React from 'react';

const Pricing = () => {
    return (
        <div className='mt-28 flex flex-col items-center justify-center'>
            <h2 className='font-extrabold text-5xl text-center pt-28'>Simple, Transparent Pricing</h2>
            <p className='text-gray-700 text-center mt-4'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            <div class="card shadow-sm mt-10 max-w-300 grid sm:grid-cols-1 md:grid-cols-3 w-full gap-7 pb-28">
  <div class="card-body bg-base-200 rounded-2xl">
    
      <h2 class="text-3xl font-bold">Premium</h2>
      <p className='text-gray-700'>Perfect for getting started</p>
    
    <p className='mt-6 text-gray-700'><span className='font-bold text-black text-4xl'>$0</span>/month</p>
    <ul class="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-700'>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-700'>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-700'>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-700'>1 project per month</span>
      </li>
     
    </ul>
    <div class="mt-6">
      <button class="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block text-white rounded-full">Get Started Free</button>
    </div>
  </div>
  <div class="card-body bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-2xl relative">
    <span class="badge badge-xs bg-yellow-200 text-yellow-700 absolute -mt-7 ml-22
    ">Most Popular</span>
      <h2 class="text-3xl font-bold">Pro</h2>
      <p className=''>Best for professionals</p>
    
    <p className='mt-6 '><span className='font-bold text-4xl'>$29</span>/month</p>
    <ul class="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className=''>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className=''>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className=''>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className=''>Unlimited projects</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className=''>Cloud sync</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className=''>Advanced analytics</span>
      </li>
     
    </ul>
    <div class="mt-6">
      <button class="btn bg-whit btn-block text-purple-600 rounded-full">Start Pro Trial</button>
    </div>
  </div>

  <div class="card-body bg-base-200 rounded-2xl">
    
      <h2 class="text-3xl font-bold">Enterprise</h2>
      <p className='text-gray-700'>For teams and businesses</p>
    
    <p className='mt-6 text-gray-700'><span className='font-bold text-black text-4xl'>$99</span>/month</p>
    <ul class="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-700'>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-700'>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-700'>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-700'>Dedicated support</span>
      </li>
     
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-700'>SLA guarantee</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-gray-700'>Custom branding</span>
      </li>
    </ul>
    <div class="mt-6">
      <button class="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block text-white rounded-full">Contact Sales</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Pricing;