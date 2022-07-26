import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* Public routes */}
					<Route path='/' element={<h1> Home </h1>} />
					<Route path='*' element={<h1> 404 </h1>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
