!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{generateSteuerId:()=>i,isOccurrencesValid:()=>r,isSteuerIdValid:()=>o});const n=e=>{const t=e.length;if(0===t||void 0===t||isNaN(t))return null;let n,r,o=10;for(let i=0;i<t;i++)n=e[i],r=(n+o)%10,0===r&&(r=10),o=2*r%11;const i=11-o;return 10===i?0:i};function r(e){const t=(e=>{const t={};for(const n in e){const r=e[n];void 0===t[r]?t[r]=[n]:t[r]=[...t[r],n]}return t})((e=>{const t={};return e.forEach((e=>{e in t?t[e]+=1:t[e]=1})),t})(e));let n=!0;return"3"in t&&(n=!e.find(((e,t,n)=>e===n[t-1]&&e===n[t-2]))),((e={})=>{let t=0;for(const n in e)if(parseInt(n)>=2&&t++,t>1)return!1;return!0})(t)&&n}function o(e){const t=e.split("").map((e=>parseInt(e,10)));if(0===t[0]||11!==e.length||!t.reduce((function(e,t){return e&&"number"==typeof t&&!isNaN(t)}),!0))return!1;const o=t.slice(0,10);return!(!r(o)||n(o)!==(e=>{const t=e.length-1;return t>=0?e[t]:null})(t))}function i(){let e;e=[];const t=Math.round(8*Math.random()+1);let o;for(e.push(t),o=[];e.length<10;){let t,n=!1;for(;!n;)t=Math.round(9*Math.random()),o=[...e,t],r(o)&&(n=!0);e=[...o]}return e.join("")+String(n(e))}return t})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiQ0FBQSxTQUEyQ0EsRUFBTUMsR0FDaEQsR0FBc0IsaUJBQVpDLFNBQTBDLGlCQUFYQyxPQUN4Q0EsT0FBT0QsUUFBVUQsU0FDYixHQUFxQixtQkFBWEcsUUFBeUJBLE9BQU9DLElBQzlDRCxPQUFPLEdBQUlILE9BQ1AsQ0FDSixJQUFJSyxFQUFJTCxJQUNSLElBQUksSUFBSU0sS0FBS0QsR0FBdUIsaUJBQVpKLFFBQXVCQSxRQUFVRixHQUFNTyxHQUFLRCxFQUFFQyxJQVB4RSxDQVNHQyxNQUFNLFdBQ1QsTSxtQkNUQSxJQUFJQyxFQUFzQixDQ0ExQkEsRUFBd0IsQ0FBQ1AsRUFBU1EsS0FDakMsSUFBSSxJQUFJQyxLQUFPRCxFQUNYRCxFQUFvQkcsRUFBRUYsRUFBWUMsS0FBU0YsRUFBb0JHLEVBQUVWLEVBQVNTLElBQzVFRSxPQUFPQyxlQUFlWixFQUFTUyxFQUFLLENBQUVJLFlBQVksRUFBTUMsSUFBS04sRUFBV0MsTUNKM0VGLEVBQXdCLENBQUNRLEVBQUtDLElBQVVMLE9BQU9NLFVBQVVDLGVBQWVDLEtBQUtKLEVBQUtDLEdDQ2xGVCxFQUF5QlAsSUFDSCxvQkFBWG9CLFFBQTBCQSxPQUFPQyxhQUMxQ1YsT0FBT0MsZUFBZVosRUFBU29CLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFgsT0FBT0MsZUFBZVosRUFBUyxhQUFjLENBQUVzQixPQUFPLE0sMkZDSHZELE1BOERNQyxFQUFlQyxJQUVuQixNQUFNQyxFQUFTRCxFQUFTQyxPQUV4QixHQUFlLElBQVhBLFFBQTJCQyxJQUFYRCxHQUF3QkUsTUFBTUYsR0FBUyxPQUFPLEtBSWxFLElBQUlHLEVBRUFDLEVBREFDLEVBRk0sR0FLVixJQUFLLElBQUl6QixFQUFJLEVBQUdBLEVBQUlvQixFQUFRcEIsSUFDMUJ1QixFQUFRSixFQUFTbkIsR0FDakJ3QixHQUFPRCxFQUFRRSxHQVBQLEdBUUksSUFBUkQsSUFDRkEsRUFUTSxJQVdSQyxFQUFXLEVBQUlELEVBWlAsR0FlVixNQUFNRSxFQWZJLEdBZWFELEVBRXZCLE9BQXVCLEtBQWZDLEVBQXFCLEVBQUlBLEdBRzVCLFNBQVNDLEVBQW1CQyxHQUNqQyxNQUNNQyxFQW5Fd0IsQ0FBQ0MsSUFDL0IsTUFBTUMsRUFBUyxHQUNmLElBQUssTUFBTTNCLEtBQU8wQixFQUFLLENBQ3JCLE1BQU1FLEVBQWtCRixFQUFJMUIsUUFDSWlCLElBQTVCVSxFQUFPQyxHQUNURCxFQUFPQyxHQUFtQixDQUFDNUIsR0FFM0IyQixFQUFPQyxHQUFtQixJQUFJRCxFQUFPQyxHQUFrQjVCLEdBRzNELE9BQU8yQixHQXlEc0JFLENBL0VGLENBQUNDLElBQzVCLE1BQU1KLEVBQU0sR0FRWixPQVBBSSxFQUFJQyxTQUFTQyxJQUNMQSxLQUFPTixFQUdYQSxFQUFJTSxJQUFRLEVBRlpOLEVBQUlNLEdBQU8sS0FLUk4sR0FxRXFCTyxDQUFxQlQsSUFFakQsSUFBSVUsR0FBbUIsRUFNdkIsTUFKSSxNQUFPVCxJQUNUUyxHQUE2Q1YsRUFuQzdCVyxNQUFLLENBQUNDLEVBQU1DLEVBQU9DLElBQVdGLElBQVNFLEVBQU1ELEVBQVEsSUFBTUQsSUFBU0UsRUFBTUQsRUFBUSxNQXRCMUUsRUFBQ1osRUFBdUIsTUFDbEQsSUFBSWMsRUFBcUIsRUFFekIsSUFBSyxNQUFNdkMsS0FBT3lCLEVBUWhCLEdBUG1CZSxTQUFTeEMsSUFHVixHQUNoQnVDLElBR0VBLEVBQXFCLEVBQ3ZCLE9BQU8sRUFJWCxPQUFPLEdBNENBRSxDQUFvQmhCLElBQXlCUyxFQUcvQyxTQUFTUSxFQUFnQjNCLEdBRTlCLE1BQU00QixFQUFjNUIsRUFBUzZCLE1BQU0sSUFBSWxCLEtBQUltQixHQUFLTCxTQUFTSyxFQUFHLE1BRzVELEdBQXVCLElBQW5CRixFQUFZLElBQWdDLEtBQXBCNUIsRUFBU0MsU0FBZ0MyQixFQXhHMURHLFFBQU8sU0FBVW5ELEVBQUdvRCxHQUM3QixPQUFPcEQsR0FBa0IsaUJBQU5vRCxJQUFtQjdCLE1BQU02QixNQUMzQyxHQXVHRCxPQUFPLEVBSVQsTUFBTUMsRUFBV0wsRUFBWU0sTUFBTSxFQUFHLElBSXRDLFNBRmdCMUIsRUFBbUJ5QixJQUloQmxDLEVBQVlrQyxLQTlHakIsQ0FBQ2xCLElBQ2YsTUFBTW9CLEVBQVlwQixFQUFJZCxPQUFTLEVBQy9CLE9BQU9rQyxHQUFhLEVBQUlwQixFQUFJb0IsR0FBYSxNQTZHdEJDLENBQVFSLElBYXRCLFNBQVNTLElBQ2QsSUFBSTVCLEVBQ0pBLEVBQVMsR0FFVCxNQUFNTCxFQUFRa0MsS0FBS0MsTUFBdUIsRUFBaEJELEtBQUtFLFNBQWdCLEdBRy9DLElBQUlDLEVBR0osSUFMQWhDLEVBQU9pQyxLQUFLdEMsR0FHWnFDLEVBQVksR0FFTGhDLEVBQU9SLE9BQVMsSUFBSSxDQUN6QixJQUNJMEMsRUFEQUMsR0FBZSxFQUVuQixNQUFRQSxHQUNORCxFQUFpQkwsS0FBS0MsTUFBc0IsRUFBaEJELEtBQUtFLFVBQ2pDQyxFQUFZLElBQUloQyxFQUFRa0MsR0FDcEJuQyxFQUFtQmlDLEtBQ3JCRyxHQUFlLEdBR25CbkMsRUFBUyxJQUFJZ0MsR0FHZixPQUFPaEMsRUFBT29DLEtBQUssSUFBTUMsT0FBTy9DLEVBQVlVLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWxpZGF0ZS1zdGV1ZXJpZC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vdmFsaWRhdGUtc3RldWVyaWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdmFsaWRhdGUtc3RldWVyaWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZhbGlkYXRlLXN0ZXVlcmlkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdmFsaWRhdGUtc3RldWVyaWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly92YWxpZGF0ZS1zdGV1ZXJpZC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIndXNlIHN0cmljdCdcblxuY29uc3QgYXJlQWxsTnVtYmVycyA9IChhcnI6IG51bWJlcltdKSA9PiB7XG4gIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGEgJiYgdHlwZW9mIGIgPT09ICdudW1iZXInICYmICFpc05hTihiKVxuICB9LCB0cnVlKTtcbn1cblxuY29uc3QgZ2V0VGFpbCA9IChhcnI6IG51bWJlcltdKSA9PiB7XG4gIGNvbnN0IGxhc3RJbmRleCA9IGFyci5sZW5ndGggLSAxO1xuICByZXR1cm4gbGFzdEluZGV4ID49IDAgPyBhcnJbbGFzdEluZGV4XSA6IG51bGw7XG59XG5cbmNvbnN0IGdldE51bU9jY3VycmVuY2VzTWFwID0gKGFycjogbnVtYmVyW10pID0+IHtcbiAgY29uc3QgbWFwID0ge307XG4gIGFyci5mb3JFYWNoKChudW06IG51bWJlcikgPT4ge1xuICAgIGlmICghKG51bSBpbiBtYXApKSB7XG4gICAgICBtYXBbbnVtXSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcFtudW1dICs9IDE7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1hcDtcbn1cblxuY29uc3QgZ3JvdXBCeU51bU9mT2NjdXJyZW5jZXMgPSAobWFwOiBPYmplY3QpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIG1hcCkge1xuICAgIGNvbnN0IG51bU9mT2NjdXJyZW5jZSA9IG1hcFtrZXldO1xuICAgIGlmIChyZXN1bHRbbnVtT2ZPY2N1cnJlbmNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXN1bHRbbnVtT2ZPY2N1cnJlbmNlXSA9IFtrZXldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbbnVtT2ZPY2N1cnJlbmNlXSA9IFsuLi5yZXN1bHRbbnVtT2ZPY2N1cnJlbmNlXSwga2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gaGFzIHRvIGhhdmUgZWl0aGVyIG9uZSBkb3VibGUgZGlnaXQgT1Igb25lIHRyaXBsZSBkaWdpdCwgbmV2ZXIgYm90aC5cbmNvbnN0IGNoZWNrRG91YmxlT3JUcmlwbGUgPSAoZ3JvdXBlZEJ5T2NjdXJyZW5jZXMgPSB7fSkgPT4ge1xuICBsZXQgbnVtMm9yM29jY3VycmVuY2VzID0gMDtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBncm91cGVkQnlPY2N1cnJlbmNlcykge1xuICAgIGNvbnN0IG9jY3VycmVuY2UgPSBwYXJzZUludChrZXkpO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgbW9yZSB0aGFuIDEgMm9yMyBvY2N1cnJlbmNlcyByZXR1cm4gZmFsc2VcbiAgICBpZiAob2NjdXJyZW5jZSA+PSAyKSB7XG4gICAgICBudW0yb3Izb2NjdXJyZW5jZXMrKztcbiAgICB9XG5cbiAgICBpZiAobnVtMm9yM29jY3VycmVuY2VzID4gMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBDYW4gb25seSBoYXZlIG51bWJlciBpbiB0d28gY29uc2VjdXRpdmUgcG9zaXRpb25zLCBuZXZlciB0aHJlZS5cbmNvbnN0IGNoZWNrQ29uc2VjdXRpdmVQb3NpdGlvbnMgPSAoZmlyc3RUZW46IG51bWJlcltdKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgcmV0dXJuICEoZmlyc3RUZW4uZmluZCgoaXRlbSwgaW5kZXgsIGFycmF5KSA9PiAoaXRlbSA9PT0gYXJyYXlbaW5kZXggLSAxXSAmJiBpdGVtID09PSBhcnJheVtpbmRleCAtIDJdKSkpO1xufVxuXG5jb25zdCBnZXRDaGVja3N1bSA9IChzdGV1ZXJJZDogbnVtYmVyW10pID0+IHtcbiAgLy8gVGFrZXMgaW4gYW4gYXJyYXkgb2YgbnVtYmVyc1xuICBjb25zdCBsZW5ndGggPSBzdGV1ZXJJZC5sZW5ndGhcblxuICBpZiAobGVuZ3RoID09PSAwIHx8IGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGlzTmFOKGxlbmd0aCkpIHJldHVybiBudWxsXG5cbiAgY29uc3QgbiA9IDExXG4gIGNvbnN0IG0gPSAxMFxuICBsZXQgZGlnaXRcbiAgbGV0IHByb2R1Y3QgPSBtXG4gIGxldCBzdW1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZGlnaXQgPSBzdGV1ZXJJZFtpXVxuICAgIHN1bSA9IChkaWdpdCArIHByb2R1Y3QpICUgbVxuICAgIGlmIChzdW0gPT09IDApIHtcbiAgICAgIHN1bSA9IG1cbiAgICB9XG4gICAgcHJvZHVjdCA9ICgyICogc3VtKSAlIG5cbiAgfVxuXG4gIGNvbnN0IGNoZWNrRGlnaXQgPSBuIC0gcHJvZHVjdFxuXG4gIHJldHVybiAoY2hlY2tEaWdpdCA9PT0gMTApID8gMCA6IGNoZWNrRGlnaXRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2NjdXJyZW5jZXNWYWxpZChkaWdpdHM6IG51bWJlcltdKSB7XG4gIGNvbnN0IGdyb3VwZWRCeUNoYXJhY3RlcnMgPSBnZXROdW1PY2N1cnJlbmNlc01hcChkaWdpdHMpO1xuICBjb25zdCBncm91cGVkQnlPY2N1cnJlbmNlcyA9IGdyb3VwQnlOdW1PZk9jY3VycmVuY2VzKGdyb3VwZWRCeUNoYXJhY3RlcnMpO1xuICBsZXQgdmFsaWRDb25zZWN1dGl2ZSA9IHRydWU7XG5cbiAgaWYgKCczJyBpbiBncm91cGVkQnlPY2N1cnJlbmNlcykge1xuICAgIHZhbGlkQ29uc2VjdXRpdmUgPSBjaGVja0NvbnNlY3V0aXZlUG9zaXRpb25zKGRpZ2l0cyk7XG4gIH1cblxuICByZXR1cm4gY2hlY2tEb3VibGVPclRyaXBsZShncm91cGVkQnlPY2N1cnJlbmNlcykgJiYgdmFsaWRDb25zZWN1dGl2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RldWVySWRWYWxpZChzdGV1ZXJJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIE1ha2Ugc3VyZSB0aGUgc3RldWVySWQgaXMgc3RyaW5nIHRoZW4gc3BsaXQgaXQgaW50byBhbiBpbnRlZ2VyIGFycmF5XG4gIGNvbnN0IHN0ZXVlcklkQXJyID0gc3RldWVySWQuc3BsaXQoJycpLm1hcChuID0+IHBhcnNlSW50KG4sIDEwKSk7XG5cbiAgLy8gQ2hlY2sgdGhhdCBzdGV1ZXJJZCBoYXMgZXhhY3RseSAxMSBkaWdpdHMgYW5kIGRvZXMgbm90IHN0YXJ0IHdpdGggMFxuICBpZiAoc3RldWVySWRBcnJbMF0gPT09IDAgfHwgc3RldWVySWQubGVuZ3RoICE9PSAxMSB8fCAhYXJlQWxsTnVtYmVycyhzdGV1ZXJJZEFycikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBBcnJhbmdlcyB0aGUgY2hhcmFjdGVycyBhbmQgdGhlaXIgb2NjdXJyZW5jZXMgZm9yIGVhc2llciBjaGVja3MuXG4gIGNvbnN0IGZpcnN0VGVuID0gc3RldWVySWRBcnIuc2xpY2UoMCwgMTApO1xuICAvLyBDaGVja3MgdGhlIHZhbGlkYXR5IG9mIHRoZSBzdGV1ZXJJZFxuICBjb25zdCBjb3JyZWN0ID0gaXNPY2N1cnJlbmNlc1ZhbGlkKGZpcnN0VGVuKTtcblxuICBpZiAoY29ycmVjdCkge1xuICAgIC8vIE1ha2VzIHN1cmUgdGhhdCB0aGUgY2hlY2tzdW0gY2hhcmFjdGVyIGFsc28gbWF0Y2hlcy5cbiAgICBjb25zdCBjaGVja3N1bSA9IGdldENoZWNrc3VtKGZpcnN0VGVuKTtcbiAgICBpZiAoY2hlY2tzdW0gPT09IGdldFRhaWwoc3RldWVySWRBcnIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qXG5UaGUgZmlyc3QgbnVtYmVyIGlzIG5vdCAwXG5JbiB0aGUgZmlyc3QgMTAgZGlnaXRzIHRoZXJlIGlzIGV4YWN0bHkgb25lIG51bWJlciBkb3VibGUgb3IgdHJpcGxlXG5JZiB0aGVyZSBhcmUgMyBzYW1lIG51bWJlcnMgYXQgdGhlIHBvc2l0aW9uIDEgdG8gMTAgdGhvc2UgZG91YmxlIG51bWJlcnMgY291bGQgbmV2ZXIgYmUgY29uc2VjdXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU3RldWVySWQoKTogc3RyaW5nIHtcbiAgbGV0IGRpZ2l0czogbnVtYmVyW107XG4gIGRpZ2l0cyA9IFtdO1xuICAvLyBkb2VzIG5vdCBzdGFydCB3aXRoIGEgMFxuICBjb25zdCBkaWdpdCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiA4KSArIDEpO1xuICBkaWdpdHMucHVzaChkaWdpdCk7XG5cbiAgbGV0IGNhbmRpZGF0ZTogbnVtYmVyW107XG4gIGNhbmRpZGF0ZSA9IFtdO1xuXG4gIHdoaWxlIChkaWdpdHMubGVuZ3RoIDwgMTApIHtcbiAgICBsZXQgaXNWYWxpZERpZ2l0ID0gZmFsc2U7XG4gICAgbGV0IGNhbmRpZGF0ZURpZ2l0OiBudW1iZXI7XG4gICAgd2hpbGUgKCFpc1ZhbGlkRGlnaXQpIHtcbiAgICAgIGNhbmRpZGF0ZURpZ2l0ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSlcbiAgICAgIGNhbmRpZGF0ZSA9IFsuLi5kaWdpdHMsIGNhbmRpZGF0ZURpZ2l0XVxuICAgICAgaWYgKGlzT2NjdXJyZW5jZXNWYWxpZChjYW5kaWRhdGUpKSB7XG4gICAgICAgIGlzVmFsaWREaWdpdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGRpZ2l0cyA9IFsuLi5jYW5kaWRhdGVdO1xuICB9XG5cbiAgcmV0dXJuIGRpZ2l0cy5qb2luKCcnKSArIFN0cmluZyhnZXRDaGVja3N1bShkaWdpdHMpKVxufVxuIl0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsImEiLCJpIiwidGhpcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwiZ2V0Q2hlY2tzdW0iLCJzdGV1ZXJJZCIsImxlbmd0aCIsInVuZGVmaW5lZCIsImlzTmFOIiwiZGlnaXQiLCJzdW0iLCJwcm9kdWN0IiwiY2hlY2tEaWdpdCIsImlzT2NjdXJyZW5jZXNWYWxpZCIsImRpZ2l0cyIsImdyb3VwZWRCeU9jY3VycmVuY2VzIiwibWFwIiwicmVzdWx0IiwibnVtT2ZPY2N1cnJlbmNlIiwiZ3JvdXBCeU51bU9mT2NjdXJyZW5jZXMiLCJhcnIiLCJmb3JFYWNoIiwibnVtIiwiZ2V0TnVtT2NjdXJyZW5jZXNNYXAiLCJ2YWxpZENvbnNlY3V0aXZlIiwiZmluZCIsIml0ZW0iLCJpbmRleCIsImFycmF5IiwibnVtMm9yM29jY3VycmVuY2VzIiwicGFyc2VJbnQiLCJjaGVja0RvdWJsZU9yVHJpcGxlIiwiaXNTdGV1ZXJJZFZhbGlkIiwic3RldWVySWRBcnIiLCJzcGxpdCIsIm4iLCJyZWR1Y2UiLCJiIiwiZmlyc3RUZW4iLCJzbGljZSIsImxhc3RJbmRleCIsImdldFRhaWwiLCJnZW5lcmF0ZVN0ZXVlcklkIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiY2FuZGlkYXRlIiwicHVzaCIsImNhbmRpZGF0ZURpZ2l0IiwiaXNWYWxpZERpZ2l0Iiwiam9pbiIsIlN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=