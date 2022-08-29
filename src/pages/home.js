import ToDoList from '../components/ToDoList'

const Home = () => {
    return ( 
        <div className="bg-gray-700 w-full h-screen">
            <h2 className="text-5xl font-bold text-white pt-12">To Dos</h2>
            <hr className="w-3/4 mx-auto pt-2" />

            <div>
                <ToDoList />
            </div>

        </div>
    );
}

export default Home;