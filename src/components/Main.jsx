import tasks from '../db/tasks.js';

export default function Main(){
  
  const completed = tasks.filter(task => task.state.toLowerCase() === 'completed');
  const inProgress = tasks.filter(task => task.state.toLowerCase() !== 'completed');




  //BONUS:
  return (
  <>
    <main>

      <div className="container">

        {/* In progress tasks */}
        <div>
          <h2>Current Tasks ({inProgress.length})</h2>

          <ul>

            {inProgress.map((task, index) => {
              return (
                <li key={index}>
                <div>
                  <div>
                    <strong>{task.title}</strong> 
                    <div className='state'>{task.state}</div>
                  </div>
                  <p>Priority: {task.priority}</p>
                  <p>Est. Time: {task.estimatedTime}</p>
                </div>
              </li>
            )}
            )}

          </ul>

        </div>

        <br />

        {/* Completed Tasks */}
        <div>
          <h2>Completed Tasks ({completed.length}) </h2>

          <ul>

            {completed.map((task, index) => {
              return (
              <li key={index}>
                <div>
                  <div>
                    <strong>{task.title}</strong> 
                    <div className='state'>{task.state}</div>
                  </div>
                  <p>Priority: {task.priority}</p>
                  <p>Est. Time: {task.estimatedTime}</p>
                </div>
              </li>
            )}
            )}

          </ul>
    
        </div>
      
      </div>

    </main>
  </>

  )

  
  
  
  // const greeting = 'Welcome to my react app'
  // return (
  //   <main>
  //     {greeting}
  //   </main>

  // )
}