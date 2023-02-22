import React from 'react'

const List = () => {
  return (
    <>
      <div className=''>
        <div className='card-body'>
          <div className='content-list-with-image'>
            <img
              src='/media/avatars/300-1.jpg'
              alt='Metronic'
              className='profile'
              width={170}
              height={170}
            />
            <ul>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => {
                return (
                  <li className='card'>
                    <img
                      src='/media/avatars/300-1.jpg'
                      alt='Metronic'
                      className='profile'
                      width={40}
                    />
                    <span>Max Smith</span>
                  </li>
                )
              })}
            </ul>
            <button className='exit'>Exit</button>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default List
