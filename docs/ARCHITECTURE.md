# Ducope — Technical Architecture

## System Architecture

```mermaid
graph TB
    subgraph Primary["Primary Project Error Handler"]
        A[try/catch] --> B{Error?}
        B -->|Yes| C[Dum.fun SDK]
        B -->|No| D[Normal Flow]
    end

    subgraph DumFun["Dum.fun SDK"]
        C --> E[createToken]
        E --> F[Meme Token Minted]
        F --> G[Display Card]
    end
```

## Integration Map

| Feature | Use Case | Depth |
|---|---|---|
| **createToken()** | Mint meme token on error | 🟢 Core |

## Implementation (15 min)

```javascript
// Wrap any error handler in primary project
try {
    await executeSwap(params);
} catch (err) {
    const cope = await dumfun.createToken({
        name: "REKT",
        description: `Swap failed: ${err.message}`,
        image: generateMemeImage(err)
    });
    showToast(`Minted $REKT — you're now a founder!`);
}
```
