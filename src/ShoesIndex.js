import Create from './Create'
import Table from './Table';
import { useEffect, useState } from 'react';
const ShoesIndex = () => {
    const [shoes, setVisitors] = useState(null);

    const handleDelete = (id) => {
        const newVisitors = shoes.filter(shoe => shoe.id !== id);
        setVisitors(newVisitors);
    }

    useEffect(() => {
        fetch('http://localhost:8000/shoes')
        .then (res => {
           return res.json();
        })
        .then (data => {
            setVisitors(data);
        })
    }, []);

    return (
        <div class="m-5">
        <div class="row">
            <div class="col-md-3">
                <Create />
            </div>
            <div class="col-md-9">
                {shoes && <Table shoes={shoes} handleDelete={handleDelete} />}
            </div>
        </div>
    </div>

    );
}
 
export default ShoesIndex;