FIND_PATH( NrrdIO_INCLUDE_DIR
	NrrdIO.h
	/usr/local/include/NrrdIO /usr/include/NrrdIO
	)

FIND_LIBRARY( NrrdIO_LIBRARY
	NAMES libNrrdIO${CMAKE_SHARED_LIBRARY_SUFFIX}
	)


IF( NrrdIO_INCLUDE_DIR AND NrrdIO_LIBRARY )

	SET( NrrdIO_FOUND TRUE )
	SET( NrrdIO_INCLUDE_DIRS ${NrrdIO_INCLUDE_DIR} )
	SET( NrrdIO_LIBRARIES ${NrrdIO_LIBRARY} )
	IF( NOT NrrdIO_FIND_QUIETLY )
		MESSAGE(STATUS "Found NrrdIO: ${NrrdIO_LIBRARIES}")
	ENDIF (NOT NrrdIO_FIND_QUIETLY)

ELSE()

	SET( NrrdIO_FOUND FALSE )
	IF( NrrdIO_FIND_REQUIRED )
		MESSAGE(FATAL_ERROR "Could not find NrrdIO (which is required)")
	ENDIF()

ENDIF()
