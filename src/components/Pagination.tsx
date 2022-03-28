import React, { FunctionComponent } from 'react'

interface pagination {
    postPerPage: number,
    totalPost: number,
    paginate: Function;
}

const Pagination: FunctionComponent<pagination> = (props) => {
    console.log('props', props)
    const pageNumbers = [];
    for (let index = 1; index < Math.ceil(props.totalPost / props.postPerPage); index++) {
        pageNumbers.push(index);
    }
    
    return (
        <>
            <nav>
                <ul className='pagination justify-content-center'>
                    {pageNumbers.map(number => 
                        <li className='page-item' key={number} >

                            <a onClick={() => props.paginate(number)} className='page-link'> 
                                {number}
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default Pagination;