 export default function TaskList() {
  return (
    <div className="min-h-screen bg-indigo-100 flex flex-col items-center justify-center p-6">
      
      <section className="bg-white rounded-2xl p-6 w-96 shadow-lg">
        
        <header className="flex justify-between mb-6">
          <article>
            <p className="text-indigo-400 text-sm">Tue Feb 18 2025</p>
            <h1 className="text-indigo-900 text-xl font-bold">List Tailwind</h1>
          </article>
          <p className="text-indigo-400 text-sm">9:31:25 p.m.</p>
        </header>

        <nav className="grid grid-cols-7 gap-2 mb-6">
          <article className="text-center">
            <p className="text-indigo-400 text-xs">s</p>
            <p className="text-indigo-700 text-sm">24</p>
          </article>
          <article className="text-center">
            <p className="text-indigo-400 text-xs">m</p>
            <p className="text-indigo-700 text-sm">25</p>
          </article>
          <article className="text-center">
            <p className="text-indigo-400 text-xs">t</p>
            <p className="text-indigo-700 text-sm">26</p>
          </article>
          <article className="text-center">
            <p className="text-indigo-400 text-xs">w</p>
            <p className="text-indigo-700 text-sm">27</p>
          </article>
          <article className="text-center">
            <p className="text-indigo-400 text-xs">t</p>
            <p className="bg-indigo-500 text-white text-sm rounded px-2 py-1">28</p>
          </article>
          <article className="text-center">
            <p className="text-indigo-400 text-xs">f</p>
            <p className="text-indigo-700 text-sm">29</p>
          </article>
          <article className="text-center">
            <p className="text-indigo-400 text-xs">s</p>
            <p className="text-indigo-700 text-sm">30</p>
          </article>
        </nav>

        <main className="space-y-3">
          
          <article className="flex items-center justify-between">
            <section className="flex items-center">
              <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white text-xs">✓</span>
              <span className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-700 text-sm line-through">take out the trash</span>
            </section>
            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded ml-3">9:00 AM</span>
          </article>

          <article className="flex items-center justify-between">
            <section className="flex items-center">
              <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white text-xs">✓</span>
              <span className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-700 text-sm line-through">do homework</span>
            </section>
            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded ml-3">12:00 PM</span>
          </article>

          <article className="flex items-center justify-between">
            <section className="flex items-center">
              <span className="w-6 h-6 border-2 border-indigo-200 rounded-full mr-3"></span>
              <span className="bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-3 text-indigo-700 text-sm">go to grocery store</span>
            </section>
            <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded ml-3">1:00 PM</span>
          </article>

          <article className="flex items-center justify-between">
            <section className="flex items-center">
              <span className="w-6 h-6 border-2 border-indigo-200 rounded-full mr-3"></span>
              <span className="bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-3 text-indigo-700 text-sm">run 5 kilometers</span>
            </section>
            <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded ml-3">4:20 PM</span>
          </article>

          <article className="flex items-center justify-between">
            <section className="flex items-center">
              <span className="w-6 h-6 border-2 border-indigo-200 rounded-full mr-3"></span>
              <span className="bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-3 text-indigo-700 text-sm">load the dishwasher</span>
            </section>
            <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded ml-3">9:00 PM</span>
          </article>

          <article className="flex items-center justify-between">
            <section className="flex items-center">
              <span className="w-6 h-6 border-2 border-indigo-200 rounded-full mr-3"></span>
              <span className="bg-indigo-50 border border-indigo-100 rounded-lg px-4 py-3 text-indigo-700 text-sm">Take out the trash</span>
            </section>
            <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded ml-3">9:00 AM</span>
          </article>

        </main>
      </section>
      
    </div>
  );
}