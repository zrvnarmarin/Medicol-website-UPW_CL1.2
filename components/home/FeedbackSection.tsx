export default function StatsSection() {
    return (
        <section className="mt-8 px-4 py-16 grid grid-cols-1 gap-16 bg-[#062026]">
            {stats.map(stat => 
                <div key={stat.id} className="flex flex-col gap-4">
                    <span className="text-white text-center font-black text-6xl">{stat.stat}</span>
                    <span className="text-center text-[#24BEE0] font-semibold text-xl">{stat.statDescription}</span>
                </div>    
            )}
        </section>
    )
}

const stats = [
    { id: 1, stat: '99%', statDescription: 'Positive Feedback' },
    { id: 2, stat: '2,300+', statDescription: 'Happy Patients A Week' },
    { id: 3, stat: '43', statDescription: 'Proffesional Doctors' },
]