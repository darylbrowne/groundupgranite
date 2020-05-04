function tile_engine(json) {
    //throw new Error("Thrown from this granite slab()");
    //return;
    document.write("This granite slab(json) was given...");
    console.log(json);
    
}

function tile(json) {
    try {
        tile_engine(json);
    } catch (e) {
        throw e;
    } finally {
        console.log('tiles cleanup');
    }
}

export {tile};
