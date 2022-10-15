const Table = ({shoes, handleDelete}) => {

    return (
        <div className="visitor-list">
            <h2>List of Shoes</h2>
            <table className="table table-striped border border-light">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {shoes.map((shoe) =>
                        <tr key={shoe.id}>
                            <td>{shoe.brand}</td>
                            <td>{shoe.size}</td>
                            <td>{shoe.price}</td>
                            <td>{shoe.color}</td>
                            <td><a className="btn" onClick={() => handleDelete(shoe.id)} ><i class="fa fa-trash" aria-hidden="true"></i></a></td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
}
 
export default Table;