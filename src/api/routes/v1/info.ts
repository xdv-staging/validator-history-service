import { Request, Response } from 'express'

const info = {
  name: 'Validator History Service',
  version: '0.0.1-beta.0',
  documentation: 'Put Docs HERE',
  release_notes: 'Release Notes HERE',
  endpoints: [
    {
      action: 'Get Topology Nodes',
      route: '/v1/network/topology/nodes',
      example: 'https://data.xrpl.org/v1/network/topology/nodes',
    },
    {
      action: 'Get Topology Node',
      route: '/v1/network/topology/nodes/{pubkey}',
      example: 'https://data.xrpl.org/v1/network/topology/nodes/{pubkey}',
    },
    {
      action: 'Get Validator',
      route: '/v2/network/validators/{pubkey}',
      example: 'https://data.xrpl.org/v1/network/validators/{pubkey}',
    },
    {
      action: 'Get Validators',
      route: '/v2/network/validators',
      example: 'https://data.xrpl.org/v1/network/validators',
    },
    {
      action: 'Get Validator Manifests',
      route: '/v2/network/validators/{pubkey}/manifests',
      example: 'https://data.xrpl.org/v1/network/validators/{pubkey}/manifests',
    },
    {
      action: 'Get Single Validator Report',
      route: '/v2/network/validators/{pubkey}/reports',
      example: 'https://data.xrpl.org/v1/network/validators/{pubkey}/reports',
    },
    {
      action: 'Get Daily Validator Report',
      route: '/v2/network/validator_reports',
      example: 'https://data.xrpl.org/v1/network/validator_reports',
    },
  ],
}

/**
 * Handles info requests.
 *
 * @param _u - Express request.
 * @param res - Express response.
 */
export default function handleInfo(_u: Request, res: Response): void {
  res.send(info)
}
