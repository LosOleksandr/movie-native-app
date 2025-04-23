const buildUrls = <T extends Record<string, string>>(endpoints: T) => {
    return Object.fromEntries(
        Object.entries(endpoints).map(([key, path]) => [key, `${endpoints.Base}${path}`]),
    ) as Record<keyof T, string>
}

export default buildUrls
