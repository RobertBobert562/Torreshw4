const dog = {
    name: 'Chico',
    species: 'PitBull',
    size: 'Chihuahua-Size',
    bark: function() {
      return 'Woof Woof Grrr!';
    }
  };
  
  
  console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
  console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);