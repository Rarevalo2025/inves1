
exports.errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    
    if (err.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Error de validación",
        errors: err.details ? err.details.map(e => e.message) : [err.message],
      });
    }
  
    
    res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  };