import { Suspense, useContext, useEffect, useMemo } from "react";
import planetJson from "../assets/json/planet.json";
import { PlanetJson } from "../models/planet";
import { useLoader } from "@react-three/fiber";
import { MTLLoader, OBJLoader } from "three-stdlib";
import * as THREE from "three";
import { PlanetOrbit } from "./PlanetOrbit";
import Sun from "./Sun";
import PlanetObjectsContext from "../utils/PlanetObjectsContext";

export const ObjectLoader = () => {
  const planets: PlanetJson[] = planetJson;
  const sunDefinition: PlanetJson = planets.find((p) => p.name === "Sun")!;
  const { setPlanetObjects } = useContext(PlanetObjectsContext);

  const mtlLoader = MTLLoader;
  const mtlPaths = planets.map((p) => p.mtlPath);

  const mapTexture: Map<string, THREE.Group> = useMemo(
    () => new Map<string, THREE.Group>(),
    [],
  );
  const objLoader = OBJLoader;

  const [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, sun] =
    useLoader(mtlLoader, mtlPaths);
  mercury.preload();
  venus.preload();
  earth.preload();
  mars.preload();
  jupiter.preload();
  saturn.preload();
  uranus.preload();
  neptune.preload();
  sun.preload();

  const mercuryObj = useLoader(objLoader, "/planet/Mercury.obj", (loader) => {
    loader.setMaterials(mercury);
  });
  mapTexture.set("Mercury", mercuryObj);

  const venusObj = useLoader(objLoader, "/planet/Venus.obj", (loader) => {
    loader.setMaterials(venus);
  });
  mapTexture.set("Venus", venusObj);

  const earthObj = useLoader(objLoader, "/planet/Earth.obj", (loader) => {
    loader.setMaterials(earth);
  });
  mapTexture.set("Earth", earthObj);

  const marsObj = useLoader(objLoader, "/planet/Mars.obj", (loader) => {
    loader.setMaterials(mars);
  });
  mapTexture.set("Mars", marsObj);

  const jupiterObj = useLoader(objLoader, "/planet/Jupiter.obj", (loader) => {
    loader.setMaterials(jupiter);
  });
  mapTexture.set("Jupiter", jupiterObj);

  const saturnObj = useLoader(objLoader, "/planet/Saturn.obj", (loader) => {
    loader.setMaterials(saturn);
  });
  mapTexture.set("Saturn", saturnObj);

  const uranusObj = useLoader(objLoader, "/planet/Uranus.obj", (loader) => {
    loader.setMaterials(uranus);
  });
  mapTexture.set("Uranus", uranusObj);

  const neptuneObj = useLoader(objLoader, "/planet/Neptune.obj", (loader) => {
    loader.setMaterials(neptune);
  });
  mapTexture.set("Neptune", neptuneObj);

  const sunObj = useLoader(objLoader, "/planet/Sun.obj", (loader) => {
    loader.setMaterials(sun);
  });
  mapTexture.set("Sun", sunObj);

  // Update the context with loaded objects once all are loaded
  useEffect(() => {
    if (mapTexture.size === planets.length) {
      setPlanetObjects(new Map(mapTexture));
    }
  }, [
    mercuryObj,
    venusObj,
    earthObj,
    marsObj,
    jupiterObj,
    saturnObj,
    uranusObj,
    neptuneObj,
    sunObj,
    setPlanetObjects,
    planets.length,
    mapTexture,
  ]);

  return (
    <>
      {/* <Soleil /> */}
      <Suspense fallback={null}>
        {mapTexture.get(sunDefinition.name) && (
          <Sun
            obj={mapTexture.get(sunDefinition.name)!}
            size={sunDefinition.size}
            rotateSpeed={sunDefinition.rotateSpeed}
          />
        )}
        {planets.map((p) => {
          if (p.name !== "Sun" && mapTexture.get(p.name)) {
            return (
              <PlanetOrbit
                id={p.id}
                key={p.id}
                orbitRadius={p.orbitRadius}
                orbitSpeed={p.speed}
                obj={mapTexture.get(p.name)!}
                rotateSpeed={p.rotateSpeed}
                size={p.size}
                gapSize={p.gapSize}
                dashSize={p.dashSize}
              />
            );
          }
          return null;
        })}
      </Suspense>
    </>
  );
};
