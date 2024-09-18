

const PokemonCard = ({id,name, sprites = []}) => {
  return (
    <section style={{height: 200}}>
        <h2 className="text-capitalize">#{id} - {name}</h2>

        {/* IMAGENES */}
        <div>
            {
                sprites.map(sprite =>
                    <img src={sprite} key={sprite} alt={name} />
                )
            }
        </div>
    </section>
  )
}

export default PokemonCard
