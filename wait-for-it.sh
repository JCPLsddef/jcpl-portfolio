#!/usr/bin/env bash
# wait-for-it.sh - Wait for a TCP host:port to be available
# Based on https://github.com/vishnubob/wait-for-it

WAITFORIT_cmdname=${0##*/}

echoerr() { if [[ $WAITFORIT_QUIET -ne 1 ]]; then echo "$@" 1>&2; fi }

usage() {
    cat << USAGE >&2
Usage:
    $WAITFORIT_cmdname host:port [-s] [-t timeout] [-- command args]
    -h HOST | --host=HOST       Host or IP under test
    -p PORT | --port=PORT       TCP port under test
    -t TIMEOUT | --timeout=TIMEOUT  Timeout in seconds
    -q | --quiet                Don't output any status messages
USAGE
    exit 1
}

wait_for() {
    if [[ $WAITFORIT_TIMEOUT -gt 0 ]]; then
        echoerr "$WAITFORIT_cmdname: waiting $WAITFORIT_TIMEOUT seconds for $WAITFORIT_HOST:$WAITFORIT_PORT"
    else
        echoerr "$WAITFORIT_cmdname: waiting for $WAITFORIT_HOST:$WAITFORIT_PORT without a timeout"
    fi
    WAITFORIT_start_ts=$(date +%s)
    while :; do
        (echo -n > /dev/tcp/$WAITFORIT_HOST/$WAITFORIT_PORT) >/dev/null 2>&1
        WAITFORIT_result=$?
        if [[ $WAITFORIT_result -eq 0 ]]; then
            WAITFORIT_end_ts=$(date +%s)
            echoerr "$WAITFORIT_cmdname: $WAITFORIT_HOST:$WAITFORIT_PORT is available after $((WAITFORIT_end_ts - WAITFORIT_start_ts)) seconds"
            return 0
        fi
        if [[ $WAITFORIT_TIMEOUT -gt 0 ]] && [[ $(($(date +%s) - WAITFORIT_start_ts)) -ge $WAITFORIT_TIMEOUT ]]; then
            echoerr "$WAITFORIT_cmdname: timeout after $WAITFORIT_TIMEOUT seconds"
            return 1
        fi
        sleep 1
    done
}

# Parse host:port
while [[ $# -gt 0 ]]; do
    case "$1" in
        *:* )
            WAITFORIT_hostport=(${1//:/ })
            WAITFORIT_HOST=${WAITFORIT_hostport[0]}
            WAITFORIT_PORT=${WAITFORIT_hostport[1]}
            shift 1
            ;;
        -t)
            WAITFORIT_TIMEOUT="$2"
            shift 2
            ;;
        --timeout=*)
            WAITFORIT_TIMEOUT="${1#*=}"
            shift 1
            ;;
        -q|--quiet)
            WAITFORIT_QUIET=1
            shift 1
            ;;
        *)
            shift 1
            ;;
    esac
done

if [[ -z "$WAITFORIT_HOST" || -z "$WAITFORIT_PORT" ]]; then
    echoerr "Error: you need to provide host:port"
    usage
fi

WAITFORIT_TIMEOUT=${WAITFORIT_TIMEOUT:-15}
WAITFORIT_QUIET=${WAITFORIT_QUIET:-0}

wait_for
exit $?
