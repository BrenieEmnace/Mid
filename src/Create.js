const Create = () => {
    return (

        <form>
                <div className="card">
                    <div className="card-header">
                        <h2>Shoes</h2>
                    </div>
                    <div className="card-body">
                        <div className="mt-4">
                            <label>Brand</label>
                            <input className="form-control" placeholder="Enter Brand" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Size</label>
                            <input className="form-control" placeholder="Enter Size" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Price</label>
                            <input className="form-control" placeholder="Enter Price" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Color</label>
                            <input className="form-control" placeholder="Enter Color" type="text" required />
                        </div>
                        <div className="mt-4">
                            <button id="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
    );
}
 
export default Create;