'use client';

import { useMemo, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  Marker,
} from 'react-simple-maps';

type PinStatus = 'visited' | 'wishlist';

type Pin = {
  city: string;
  country: string;
  coordinates: [number, number]; // [longitude, latitude]
  status: PinStatus;
};

const statusColors: Record<PinStatus, string> = {
  visited: '#ef4444', // red
  wishlist: '#fbbf24', // amber/gold
};

const statusLabels: Record<PinStatus, string> = {
  visited: 'Places I loved visiting',
  wishlist: 'On my radar next',
};

const geoUrl =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

function TravelMap() {
  const [hoveredPin, setHoveredPin] = useState<Pin | null>(null);

  const pins = useMemo<Pin[]>(
    () => [
      { city: 'Lisbon', country: 'Portugal', coordinates: [-9.1393, 38.7223], status: 'visited' },
      { city: 'Madrid', country: 'Spain', coordinates: [-3.7038, 40.4168], status: 'visited' },
      { city: 'Rome', country: 'Italy', coordinates: [12.4964, 41.9028], status: 'visited' },
      { city: 'Vienna', country: 'Austria', coordinates: [16.3738, 48.2082], status: 'visited' },
      { city: 'Budapest', country: 'Hungary', coordinates: [19.0402, 47.4979], status: 'visited' },
      { city: 'Prague', country: 'Czechia', coordinates: [14.4378, 50.0755], status: 'visited' },
      { city: 'Istanbul', country: 'Türkiye', coordinates: [28.9784, 41.0082], status: 'visited' },
      { city: 'Tbilisi', country: 'Georgia', coordinates: [44.8271, 41.7151], status: 'wishlist' },
      { city: 'Riga', country: 'Latvia', coordinates: [24.1052, 56.9496], status: 'wishlist' },
      { city: 'Reykjavík', country: 'Iceland', coordinates: [-21.8277, 64.1283], status: 'wishlist' },
      { city: 'Copenhagen', country: 'Denmark', coordinates: [12.5683, 55.6761], status: 'wishlist' },
      { city: 'San Francisco', country: 'USA', coordinates: [-122.4194, 37.7749], status: 'visited' },
      { city: 'Austin', country: 'USA', coordinates: [-97.7431, 30.2672], status: 'visited' },
      { city: 'Mexico City', country: 'Mexico', coordinates: [-99.1332, 19.4326], status: 'wishlist' },
      { city: 'Tokyo', country: 'Japan', coordinates: [139.6917, 35.6895], status: 'wishlist' },
      { city: 'Sydney', country: 'Australia', coordinates: [151.2093, -33.8688], status: 'wishlist' },
    ],
    []
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#d4d4d4]">
        {(Object.keys(statusColors) as PinStatus[]).map((status) => (
          <div key={status} className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-full border border-white/30 shadow-sm"
              style={{ backgroundColor: statusColors[status] }}
              aria-hidden
            />
            <span className="capitalize">{statusLabels[status]}</span>
          </div>
        ))}
        <span className="text-[11px] sm:text-xs text-[#9ca3af]">
          Hover or tap pins to see the location.
        </span>
      </div>

      <div className="bg-[#111827] border border-[#1f2937] rounded-lg shadow-xl overflow-hidden">
        <div className="bg-[#0b1726] px-4 py-3 border-b border-[#1f2937] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div className="text-sm sm:text-base font-semibold text-white">
            Travel Map — inspired by the pinboard at home
          </div>
          <div className="text-xs text-[#9ca3af]">
            Projection: Equal Earth · Data: world-atlas
          </div>
        </div>

        <div className="relative">
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{ scale: 165 }}
            height={460}
            style={{ width: '100%', height: '100%' }}
          >
            <Sphere stroke="#1f2937" strokeWidth={0.8} fill="#0b1220" />
            <Graticule stroke="#1f2937" strokeWidth={0.3} />
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#111827"
                    stroke="#1f2937"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: 'none' },
                      hover: { fill: '#1f2937', outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {pins.map((pin) => (
              <Marker
                key={`${pin.city}-${pin.country}`}
                coordinates={pin.coordinates}
                onMouseEnter={() => setHoveredPin(pin)}
                onMouseLeave={() => setHoveredPin(null)}
                onTouchStart={() => setHoveredPin(pin)}
              >
                <g transform="translate(0, -6)">
                  <circle
                    r={5}
                    fill={statusColors[pin.status]}
                    stroke="#0b1220"
                    strokeWidth={1.2}
                    className="drop-shadow"
                  />
                  <circle r={1.8} fill="#f8fafc" opacity={0.9} />
                </g>
              </Marker>
            ))}
          </ComposableMap>

          {hoveredPin && (
            <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4 bg-[#111827]/90 border border-[#1f2937] text-[#e5e7eb] px-3 py-2 rounded-md shadow-lg backdrop-blur-sm text-sm">
              <div className="font-semibold">{hoveredPin.city}</div>
              <div className="text-xs text-[#9ca3af]">{hoveredPin.country}</div>
              <div
                className="mt-1 inline-flex items-center gap-1 rounded-full px-2 py-[2px] text-[11px]"
                style={{
                  backgroundColor: `${statusColors[hoveredPin.status]}1A`,
                  color: statusColors[hoveredPin.status],
                  border: `1px solid ${statusColors[hoveredPin.status]}55`,
                }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: statusColors[hoveredPin.status] }}
                />
                {hoveredPin.status === 'visited' ? 'Visited' : 'Want to visit'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TravelMap;
