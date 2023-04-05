import React from 'react'

const Acordion = (props) => {
    let category = props.category;
    let details = props.details;
    let nmber = props.number;
    const heading = `heading${nmber}`;
    const collapse = `collapse${nmber}`;
    const collapse2 = `#collapse${nmber}`;
    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id={heading}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target={collapse2} aria-expanded="true" aria-controls={collapse}>
                        <strong>{category}</strong>
                    </button>
                </h2>
                <div id={collapse} className="accordion-collapse collapse" aria-labelledby={heading}
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <table className="table table-striped table-dark">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Average Usage(Per Month)</th>
                                <th scope="col">Expense(This Month)</th>
                                <th scope="col">Quantity left</th>
                            </tr>
                            </thead>
                            <tbody>
                            {details.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{data.name}</td>
                                        <td>{data.price}</td>
                                        <td>{data.avg_usage}</td>
                                        <td>{data.curr_quantity}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acordion