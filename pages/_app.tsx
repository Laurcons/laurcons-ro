import '../styles/globals.scss';
import Navbar from '../components/Navbar';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="h-100">
			<Navbar />
			<div className="container" style={{paddingTop: "70px"}}>
				<div className="py-3">
					<Component {...pageProps} />
				</div>
				<div style={{height: "200px"}}></div>
			</div>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
		</div>
	);
}
export default MyApp
