interface CharacterMapBuilder {
  map: {
    [key: string]: any;
  };
  addRange: (start: string, end: string, base: number) => void;
}

interface CharacterMap {
  createBuilder: () => CharacterMapBuilder;
}

/**
 * Builder for building a character map.
 * @class CharacterMapBuilder
 */

const charMapping: CharacterMap = {
  /**
   * Creates a builder for building a character map.
   * @returns  A character map builder.
   */
  createBuilder: (): CharacterMapBuilder => {
    const map: { [key: string]: any } = {};
    return {
      map,
      /**
       * Adds a range mapping to the map.
       * @param {string} start Start character.
       * @param {string} end End character.
       * @param {numeric} base Value corresponding to the start character.
       * @memberof module:utils/charMapping~CharacterMapBuilder
       * @instance
       */
      addRange: (start: string, end: string, base: number) => {
        const startCode = start.charCodeAt(0);
        const endCode = end.charCodeAt(0);

        for (let code = startCode; code <= endCode; ++code) map[String.fromCharCode(code)] = code - startCode + base;
      },
    };
  },
};

export default charMapping;
