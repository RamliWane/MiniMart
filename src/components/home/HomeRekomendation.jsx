import Card from '../ui/Card.jsx';
export default function HomeRekomendasi() {
    return (
        <section className="py-5 mt-3 rounded-3xl bg-white">
            <div className="flex justify-center">
                <h1 className="text-2xl font-medium">Rekomendasi</h1>
            </div>
            <div className=" mx-auto px-4 sm:px-6 lg:px-1 mt-3">
                <Card />
            </div>
        </section>
    )
}