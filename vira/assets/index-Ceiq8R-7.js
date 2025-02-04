(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var De=(e=>(e.ElementExample="element-example",e.Page="page",e.Root="root",e))(De||{});function J(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function wp(e){return J(e).filter(t=>isNaN(Number(t)))}function $t(e){return wp(e).map(n=>e[n])}var bp=/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,Ep=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,Dp=/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,Xs={Space_Separator:bp,ID_Start:Ep,ID_Continue:Dp},eo={isSpaceSeparator(e){return typeof e=="string"&&Xs.Space_Separator.test(e)},isIdStartChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="$"||e==="_"||Xs.ID_Start.test(e))},isIdContinueChar(e){return typeof e=="string"&&(e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="$"||e==="_"||e==="‌"||e==="‍"||Xs.ID_Continue.test(e))},isDigit(e){return typeof e=="string"&&/[0-9]/.test(e)},isHexDigit(e){return typeof e=="string"&&/[0-9A-Fa-f]/.test(e)}},vp=function(t,n,r){const i=[];let s="",o,a,u="",l;if(n!=null&&typeof n=="object"&&!Array.isArray(n)&&(r=n.space,l=n.quote,n=n.replacer),typeof n=="function")a=n;else if(Array.isArray(n)){o=[];for(const D of n){let $;typeof D=="string"?$=D:(typeof D=="number"||D instanceof String||D instanceof Number)&&($=String(D)),$!==void 0&&o.indexOf($)<0&&o.push($)}}return r instanceof Number?r=Number(r):r instanceof String&&(r=String(r)),typeof r=="number"?r>0&&(r=Math.min(10,Math.floor(r)),u="          ".substr(0,r)):typeof r=="string"&&(u=r.substr(0,10)),f("",{"":t});function f(D,$){let A=$[D];switch(A!=null&&(typeof A.toJSON5=="function"?A=A.toJSON5(D):typeof A.toJSON=="function"&&(A=A.toJSON(D))),a&&(A=a.call($,D,A)),A instanceof Number?A=Number(A):A instanceof String?A=String(A):A instanceof Boolean&&(A=A.valueOf()),A){case null:return"null";case!0:return"true";case!1:return"false"}if(typeof A=="string")return c(A);if(typeof A=="number")return String(A);if(typeof A=="object")return Array.isArray(A)?b(A):d(A)}function c(D){const $={"'":.1,'"':.2},A={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};let F="";for(let _=0;_<D.length;_++){const G=D[_];switch(G){case"'":case'"':$[G]++,F+=G;continue;case"\0":if(eo.isDigit(D[_+1])){F+="\\x00";continue}}if(A[G]){F+=A[G];continue}if(G<" "){let Ae=G.charCodeAt(0).toString(16);F+="\\x"+("00"+Ae).substring(Ae.length);continue}F+=G}const I=l||Object.keys($).reduce((_,G)=>$[_]<$[G]?_:G);return F=F.replace(new RegExp(I,"g"),A[I]),I+F+I}function d(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let $=s;s=s+u;let A=o||Object.keys(D),F=[];for(const _ of A){const G=f(_,D);if(G!==void 0){let Ae=p(_)+":";u!==""&&(Ae+=" "),Ae+=G,F.push(Ae)}}let I;if(F.length===0)I="{}";else{let _;if(u==="")_=F.join(","),I="{"+_+"}";else{let G=`,
`+s;_=F.join(G),I=`{
`+s+_+`,
`+$+"}"}}return i.pop(),s=$,I}function p(D){if(D.length===0)return c(D);const $=String.fromCodePoint(D.codePointAt(0));if(!eo.isIdStartChar($))return c(D);for(let A=$.length;A<D.length;A++)if(!eo.isIdContinueChar(String.fromCodePoint(D.codePointAt(A))))return c(D);return D}function b(D){if(i.indexOf(D)>=0)throw TypeError("Converting circular structure to JSON5");i.push(D);let $=s;s=s+u;let A=[];for(let I=0;I<D.length;I++){const _=f(String(I),D);A.push(_!==void 0?_:"null")}let F;if(A.length===0)F="[]";else if(u==="")F="["+A.join(",")+"]";else{let I=`,
`+s,_=A.join(I);F=`[
`+s+_+`,
`+$+"]"}return i.pop(),s=$,F}};const Ap={stringify:vp};var Df=Ap;function m(e){try{return Df.stringify(e)}catch{return String(e)}}const $p=[".",":",";",",","?","!"],Cp=new RegExp(`[${$p.join("")}]+$`);function Au(e){return e.replace(Cp,"")}function ve(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:m(e):""}function Yr(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&Au(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:Au(r)).join(": "):""}function Be(e){return e instanceof Error?e:new Error(ve(e))}function Jr(e,t){const n=Be(e);return n.message=Yr(t,n.message),n}var $u;(function(e){e.Get="GET",e.Head="HEAD",e.Options="OPTIONS",e.Trace="TRACE",e.Put="PUT",e.Delete="DELETE",e.Post="POST",e.Patch="PATCH",e.Connect="CONNECT"})($u||($u={}));var E;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(E||(E={}));var N;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(N||(N={}));N.ClientError,N.ServerError;E.Continue+"",N.Information,E.SwitchingProtocols+"",N.Information,E.Processing+"",N.Information,E.EarlyHints+"",N.Information,E.Ok+"",N.Success,E.Created+"",N.Success,E.Accepted+"",N.Success,E.NonAuthoritativeInformation+"",N.Success,E.NoContent+"",N.Success,E.ResetContent+"",N.Success,E.PartialContent+"",N.Success,E.MultiStatus+"",N.Success,E.AlreadyReported+"",N.Success,E.ImUsed+"",N.Success,E.MultipleChoices+"",N.Redirect,E.MovedPermanently+"",N.Redirect,E.Found+"",N.Redirect,E.SeeOther+"",N.Redirect,E.NotModified+"",N.Redirect,E.UseProxy+"",N.Redirect,E.Unused+"",N.Redirect,E.TemporaryRedirect+"",N.Redirect,E.PermanentRedirect+"",N.Redirect,E.BadRequest+"",N.ClientError,E.Unauthorized+"",N.ClientError,E.PaymentRequired+"",N.ClientError,E.Forbidden+"",N.ClientError,E.NotFound+"",N.ClientError,E.MethodNotAllowed+"",N.ClientError,E.NotAcceptable+"",N.ClientError,E.ProxyAuthenticationRequired+"",N.ClientError,E.RequestTimeout+"",N.ClientError,E.Conflict+"",N.ClientError,E.Gone+"",N.ClientError,E.LengthRequired+"",N.ClientError,E.PreconditionFailed+"",N.ClientError,E.PayloadTooLarge+"",N.ClientError,E.UriTooLong+"",N.ClientError,E.UnsupportedMediaType+"",N.ClientError,E.RangeNotSatisfiable+"",N.ClientError,E.ExpectationFailed+"",N.ClientError,E.ImATeapot+"",N.ClientError,E.MisdirectedRequest+"",N.ClientError,E.UnprocessableContent+"",N.ClientError,E.Locked+"",N.ClientError,E.FailedDependency+"",N.ClientError,E.TooEarly+"",N.ClientError,E.UpgradeRequired+"",N.ClientError,E.PreconditionRequired+"",N.ClientError,E.TooManyRequests+"",N.ClientError,E.RequestHeaderFieldsTooLarge+"",N.ClientError,E.UnavailableForLegalReasons+"",N.ClientError,E.InternalServerError+"",N.ServerError,E.NotImplemented+"",N.ServerError,E.BadGateway+"",N.ServerError,E.ServiceUnavailable+"",N.ServerError,E.GatewayTimeout+"",N.ServerError,E.HttpVersionNotSupported+"",N.ServerError,E.VariantAlsoNegotiates+"",N.ServerError,E.InsufficientStorage+"",N.ServerError,E.LoopDetected+"",N.ServerError,E.NotExtended+"",N.ServerError,E.NetworkAuthenticationRequired+"",N.ServerError;const xi={[N.Information]:[E.Continue,E.SwitchingProtocols,E.Processing,E.EarlyHints],[N.Success]:[E.Ok,E.Created,E.Accepted,E.NonAuthoritativeInformation,E.NoContent,E.ResetContent,E.PartialContent,E.MultiStatus,E.AlreadyReported,E.ImUsed],[N.Redirect]:[E.MultipleChoices,E.MovedPermanently,E.Found,E.SeeOther,E.NotModified,E.UseProxy,E.Unused,E.TemporaryRedirect,E.PermanentRedirect],[N.ClientError]:[E.BadRequest,E.Unauthorized,E.PaymentRequired,E.Forbidden,E.NotFound,E.MethodNotAllowed,E.NotAcceptable,E.ProxyAuthenticationRequired,E.RequestTimeout,E.Conflict,E.Gone,E.LengthRequired,E.PreconditionFailed,E.PayloadTooLarge,E.UriTooLong,E.UnsupportedMediaType,E.RangeNotSatisfiable,E.ExpectationFailed,E.ImATeapot,E.MisdirectedRequest,E.UnprocessableContent,E.Locked,E.FailedDependency,E.TooEarly,E.UpgradeRequired,E.PreconditionRequired,E.TooManyRequests,E.RequestHeaderFieldsTooLarge,E.UnavailableForLegalReasons],[N.ServerError]:[E.InternalServerError,E.NotImplemented,E.BadGateway,E.ServiceUnavailable,E.GatewayTimeout,E.HttpVersionNotSupported,E.VariantAlsoNegotiates,E.InsufficientStorage,E.LoopDetected,E.NotExtended,E.NetworkAuthenticationRequired]};function vf({min:e,max:t}){return e>t?{min:t,max:e}:{min:e,max:t}}let Af=class{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(Be(r))}})}};class vn extends Error{}class kp extends vn{constructor(t){super(`Invalid DateTime: ${t.toMessage()}`)}}class Sp extends vn{constructor(t){super(`Invalid Interval: ${t.toMessage()}`)}}class Fp extends vn{constructor(t){super(`Invalid Duration: ${t.toMessage()}`)}}class On extends vn{}class $f extends vn{constructor(t){super(`Invalid unit ${t}`)}}class we extends vn{}class Ot extends vn{constructor(){super("Zone is an abstract class")}}const M="numeric",ut="short",qe="long",qi={year:M,month:M,day:M},Cf={year:M,month:ut,day:M},Tp={year:M,month:ut,day:M,weekday:ut},kf={year:M,month:qe,day:M},Sf={year:M,month:qe,day:M,weekday:qe},Ff={hour:M,minute:M},Tf={hour:M,minute:M,second:M},Mf={hour:M,minute:M,second:M,timeZoneName:ut},Nf={hour:M,minute:M,second:M,timeZoneName:qe},xf={hour:M,minute:M,hourCycle:"h23"},Bf={hour:M,minute:M,second:M,hourCycle:"h23"},Pf={hour:M,minute:M,second:M,hourCycle:"h23",timeZoneName:ut},Lf={hour:M,minute:M,second:M,hourCycle:"h23",timeZoneName:qe},If={year:M,month:M,day:M,hour:M,minute:M},Rf={year:M,month:M,day:M,hour:M,minute:M,second:M},Of={year:M,month:ut,day:M,hour:M,minute:M},_f={year:M,month:ut,day:M,hour:M,minute:M,second:M},Mp={year:M,month:ut,day:M,weekday:ut,hour:M,minute:M},Vf={year:M,month:qe,day:M,hour:M,minute:M,timeZoneName:ut},Uf={year:M,month:qe,day:M,hour:M,minute:M,second:M,timeZoneName:ut},Wf={year:M,month:qe,day:M,weekday:qe,hour:M,minute:M,timeZoneName:qe},qf={year:M,month:qe,day:M,weekday:qe,hour:M,minute:M,second:M,timeZoneName:qe};class Hr{get type(){throw new Ot}get name(){throw new Ot}get ianaName(){return this.name}get isUniversal(){throw new Ot}offsetName(t,n){throw new Ot}formatOffset(t,n){throw new Ot}offset(t){throw new Ot}equals(t){throw new Ot}get isValid(){throw new Ot}}let to=null;class fs extends Hr{static get instance(){return to===null&&(to=new fs),to}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Qf(t,n,r)}formatOffset(t,n){return kr(this.offset(t),n)}offset(t){return-new Date(t).getTimezoneOffset()}equals(t){return t.type==="system"}get isValid(){return!0}}let Bi={};function Np(e){return Bi[e]||(Bi[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),Bi[e]}const xp={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Bp(e,t){const n=e.format(t).replace(/\u200E/g,""),r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n),[,i,s,o,a,u,l,f]=r;return[o,i,s,a,u,l,f]}function Pp(e,t){const n=e.formatToParts(t),r=[];for(let i=0;i<n.length;i++){const{type:s,value:o}=n[i],a=xp[s];s==="era"?r[a]=o:V(a)||(r[a]=parseInt(o,10))}return r}let di={};class Tt extends Hr{static create(t){return di[t]||(di[t]=new Tt(t)),di[t]}static resetCache(){di={},Bi={}}static isValidSpecifier(t){return this.isValidZone(t)}static isValidZone(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch{return!1}}constructor(t){super(),this.zoneName=t,this.valid=Tt.isValidZone(t)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(t,{format:n,locale:r}){return Qf(t,n,r,this.name)}formatOffset(t,n){return kr(this.offset(t),n)}offset(t){const n=new Date(t);if(isNaN(n))return NaN;const r=Np(this.name);let[i,s,o,a,u,l,f]=r.formatToParts?Pp(r,n):Bp(r,n);a==="BC"&&(i=-Math.abs(i)+1);const d=hs({year:i,month:s,day:o,hour:u===24?0:u,minute:l,second:f,millisecond:0});let p=+n;const b=p%1e3;return p-=b>=0?b:1e3+b,(d-p)/(60*1e3)}equals(t){return t.type==="iana"&&t.name===this.name}get isValid(){return this.valid}}let Cu={};function Lp(e,t={}){const n=JSON.stringify([e,t]);let r=Cu[n];return r||(r=new Intl.ListFormat(e,t),Cu[n]=r),r}let jo={};function zo(e,t={}){const n=JSON.stringify([e,t]);let r=jo[n];return r||(r=new Intl.DateTimeFormat(e,t),jo[n]=r),r}let Go={};function Ip(e,t={}){const n=JSON.stringify([e,t]);let r=Go[n];return r||(r=new Intl.NumberFormat(e,t),Go[n]=r),r}let Ko={};function Rp(e,t={}){const{base:n,...r}=t,i=JSON.stringify([e,r]);let s=Ko[i];return s||(s=new Intl.RelativeTimeFormat(e,t),Ko[i]=s),s}let br=null;function Op(){return br||(br=new Intl.DateTimeFormat().resolvedOptions().locale,br)}let ku={};function _p(e){let t=ku[e];if(!t){const n=new Intl.Locale(e);t="getWeekInfo"in n?n.getWeekInfo():n.weekInfo,ku[e]=t}return t}function Vp(e){const t=e.indexOf("-x-");t!==-1&&(e=e.substring(0,t));const n=e.indexOf("-u-");if(n===-1)return[e];{let r,i;try{r=zo(e).resolvedOptions(),i=e}catch{const u=e.substring(0,n);r=zo(u).resolvedOptions(),i=u}const{numberingSystem:s,calendar:o}=r;return[i,s,o]}}function Up(e,t,n){return(n||t)&&(e.includes("-u-")||(e+="-u"),n&&(e+=`-ca-${n}`),t&&(e+=`-nu-${t}`)),e}function Wp(e){const t=[];for(let n=1;n<=12;n++){const r=U.utc(2009,n,1);t.push(e(r))}return t}function qp(e){const t=[];for(let n=1;n<=7;n++){const r=U.utc(2016,11,13+n);t.push(e(r))}return t}function hi(e,t,n,r){const i=e.listingMode();return i==="error"?null:i==="en"?n(t):r(t)}function jp(e){return e.numberingSystem&&e.numberingSystem!=="latn"?!1:e.numberingSystem==="latn"||!e.locale||e.locale.startsWith("en")||new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem==="latn"}class zp{constructor(t,n,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;const{padTo:i,floor:s,...o}=r;if(!n||Object.keys(o).length>0){const a={useGrouping:!1,...r};r.padTo>0&&(a.minimumIntegerDigits=r.padTo),this.inf=Ip(t,a)}}format(t){if(this.inf){const n=this.floor?Math.floor(t):t;return this.inf.format(n)}else{const n=this.floor?Math.floor(t):Ma(t,3);return le(n,this.padTo)}}}class Gp{constructor(t,n,r){this.opts=r,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=t;else if(t.zone.type==="fixed"){const o=-1*(t.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;t.offset!==0&&Tt.create(a).valid?(i=a,this.dt=t):(i="UTC",this.dt=t.offset===0?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else t.zone.type==="system"?this.dt=t:t.zone.type==="iana"?(this.dt=t,i=t.zone.name):(i="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=zo(n,s)}format(){return this.originalZone?this.formatToParts().map(({value:t})=>t).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const t=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?t.map(n=>{if(n.type==="timeZoneName"){const r=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...n,value:r}}else return n}):t}resolvedOptions(){return this.dtf.resolvedOptions()}}class Kp{constructor(t,n,r){this.opts={style:"long",...r},!n&&Jf()&&(this.rtf=Rp(t,r))}format(t,n){return this.rtf?this.rtf.format(t,n):gg(n,t,this.opts.numeric,this.opts.style!=="long")}formatToParts(t,n){return this.rtf?this.rtf.formatToParts(t,n):[]}}const Zp={firstDay:1,minimalDays:4,weekend:[6,7]};class H{static fromOpts(t){return H.create(t.locale,t.numberingSystem,t.outputCalendar,t.weekSettings,t.defaultToEN)}static create(t,n,r,i,s=!1){const o=t||te.defaultLocale,a=o||(s?"en-US":Op()),u=n||te.defaultNumberingSystem,l=r||te.defaultOutputCalendar,f=Zo(i)||te.defaultWeekSettings;return new H(a,u,l,f,o)}static resetCache(){br=null,jo={},Go={},Ko={}}static fromObject({locale:t,numberingSystem:n,outputCalendar:r,weekSettings:i}={}){return H.create(t,n,r,i)}constructor(t,n,r,i,s){const[o,a,u]=Vp(t);this.locale=o,this.numberingSystem=n||a||null,this.outputCalendar=r||u||null,this.weekSettings=i,this.intl=Up(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=jp(this)),this.fastNumbersCached}listingMode(){const t=this.isEnglish(),n=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return t&&n?"en":"intl"}clone(t){return!t||Object.getOwnPropertyNames(t).length===0?this:H.create(t.locale||this.specifiedLocale,t.numberingSystem||this.numberingSystem,t.outputCalendar||this.outputCalendar,Zo(t.weekSettings)||this.weekSettings,t.defaultToEN||!1)}redefaultToEN(t={}){return this.clone({...t,defaultToEN:!0})}redefaultToSystem(t={}){return this.clone({...t,defaultToEN:!1})}months(t,n=!1){return hi(this,t,td,()=>{const r=n?{month:t,day:"numeric"}:{month:t},i=n?"format":"standalone";return this.monthsCache[i][t]||(this.monthsCache[i][t]=Wp(s=>this.extract(s,r,"month"))),this.monthsCache[i][t]})}weekdays(t,n=!1){return hi(this,t,id,()=>{const r=n?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},i=n?"format":"standalone";return this.weekdaysCache[i][t]||(this.weekdaysCache[i][t]=qp(s=>this.extract(s,r,"weekday"))),this.weekdaysCache[i][t]})}meridiems(){return hi(this,void 0,()=>sd,()=>{if(!this.meridiemCache){const t={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[U.utc(2016,11,13,9),U.utc(2016,11,13,19)].map(n=>this.extract(n,t,"dayperiod"))}return this.meridiemCache})}eras(t){return hi(this,t,od,()=>{const n={era:t};return this.eraCache[t]||(this.eraCache[t]=[U.utc(-40,1,1),U.utc(2017,1,1)].map(r=>this.extract(r,n,"era"))),this.eraCache[t]})}extract(t,n,r){const i=this.dtFormatter(t,n),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===r);return o?o.value:null}numberFormatter(t={}){return new zp(this.intl,t.forceSimple||this.fastNumbers,t)}dtFormatter(t,n={}){return new Gp(t,this.intl,n)}relFormatter(t={}){return new Kp(this.intl,this.isEnglish(),t)}listFormatter(t={}){return Lp(this.intl,t)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Hf()?_p(this.locale):Zp}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let no=null;class $e extends Hr{static get utcInstance(){return no===null&&(no=new $e(0)),no}static instance(t){return t===0?$e.utcInstance:new $e(t)}static parseSpecifier(t){if(t){const n=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(n)return new $e(ms(n[1],n[2]))}return null}constructor(t){super(),this.fixed=t}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${kr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${kr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(t,n){return kr(this.fixed,n)}get isUniversal(){return!0}offset(){return this.fixed}equals(t){return t.type==="fixed"&&t.fixed===this.fixed}get isValid(){return!0}}class Yp extends Hr{constructor(t){super(),this.zoneName=t}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function zt(e,t){if(V(e)||e===null)return t;if(e instanceof Hr)return e;if(tg(e)){const n=e.toLowerCase();return n==="default"?t:n==="local"||n==="system"?fs.instance:n==="utc"||n==="gmt"?$e.utcInstance:$e.parseSpecifier(n)||Tt.create(e)}else return Yt(e)?$e.instance(e):typeof e=="object"&&"offset"in e&&typeof e.offset=="function"?e:new Yp(e)}const ka={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Su={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},Jp=ka.hanidec.replace(/[\[|\]]/g,"").split("");function Hp(e){let t=parseInt(e,10);if(isNaN(t)){t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);if(e[n].search(ka.hanidec)!==-1)t+=Jp.indexOf(e[n]);else for(const i in Su){const[s,o]=Su[i];r>=s&&r<=o&&(t+=r-s)}}return parseInt(t,10)}else return t}let xn={};function Qp(){xn={}}function nt({numberingSystem:e},t=""){const n=e||"latn";return xn[n]||(xn[n]={}),xn[n][t]||(xn[n][t]=new RegExp(`${ka[n]}${t}`)),xn[n][t]}let Fu=()=>Date.now(),Tu="system",Mu=null,Nu=null,xu=null,Bu=60,Pu,Lu=null;class te{static get now(){return Fu}static set now(t){Fu=t}static set defaultZone(t){Tu=t}static get defaultZone(){return zt(Tu,fs.instance)}static get defaultLocale(){return Mu}static set defaultLocale(t){Mu=t}static get defaultNumberingSystem(){return Nu}static set defaultNumberingSystem(t){Nu=t}static get defaultOutputCalendar(){return xu}static set defaultOutputCalendar(t){xu=t}static get defaultWeekSettings(){return Lu}static set defaultWeekSettings(t){Lu=Zo(t)}static get twoDigitCutoffYear(){return Bu}static set twoDigitCutoffYear(t){Bu=t%100}static get throwOnInvalid(){return Pu}static set throwOnInvalid(t){Pu=t}static resetCaches(){H.resetCache(),Tt.resetCache(),U.resetCache(),Qp()}}class st{constructor(t,n){this.reason=t,this.explanation=n}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const jf=[0,31,59,90,120,151,181,212,243,273,304,334],zf=[0,31,60,91,121,152,182,213,244,274,305,335];function Xe(e,t){return new st("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function Sa(e,t,n){const r=new Date(Date.UTC(e,t-1,n));e<100&&e>=0&&r.setUTCFullYear(r.getUTCFullYear()-1900);const i=r.getUTCDay();return i===0?7:i}function Gf(e,t,n){return n+(Qr(e)?zf:jf)[t-1]}function Kf(e,t){const n=Qr(e)?zf:jf,r=n.findIndex(s=>s<t),i=t-n[r];return{month:r+1,day:i}}function Fa(e,t){return(e-t+7)%7+1}function ji(e,t=4,n=1){const{year:r,month:i,day:s}=e,o=Gf(r,i,s),a=Fa(Sa(r,i,s),n);let u=Math.floor((o-a+14-t)/7),l;return u<1?(l=r-1,u=Nr(l,t,n)):u>Nr(r,t,n)?(l=r+1,u=1):l=r,{weekYear:l,weekNumber:u,weekday:a,...ps(e)}}function Iu(e,t=4,n=1){const{weekYear:r,weekNumber:i,weekday:s}=e,o=Fa(Sa(r,1,t),n),a=Wn(r);let u=i*7+s-o-7+t,l;u<1?(l=r-1,u+=Wn(l)):u>a?(l=r+1,u-=Wn(r)):l=r;const{month:f,day:c}=Kf(l,u);return{year:l,month:f,day:c,...ps(e)}}function ro(e){const{year:t,month:n,day:r}=e,i=Gf(t,n,r);return{year:t,ordinal:i,...ps(e)}}function Ru(e){const{year:t,ordinal:n}=e,{month:r,day:i}=Kf(t,n);return{year:t,month:r,day:i,...ps(e)}}function Ou(e,t){if(!V(e.localWeekday)||!V(e.localWeekNumber)||!V(e.localWeekYear)){if(!V(e.weekday)||!V(e.weekNumber)||!V(e.weekYear))throw new On("Cannot mix locale-based week fields with ISO-based week fields");return V(e.localWeekday)||(e.weekday=e.localWeekday),V(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),V(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Xp(e,t=4,n=1){const r=ds(e.weekYear),i=et(e.weekNumber,1,Nr(e.weekYear,t,n)),s=et(e.weekday,1,7);return r?i?s?!1:Xe("weekday",e.weekday):Xe("week",e.weekNumber):Xe("weekYear",e.weekYear)}function eg(e){const t=ds(e.year),n=et(e.ordinal,1,Wn(e.year));return t?n?!1:Xe("ordinal",e.ordinal):Xe("year",e.year)}function Zf(e){const t=ds(e.year),n=et(e.month,1,12),r=et(e.day,1,zi(e.year,e.month));return t?n?r?!1:Xe("day",e.day):Xe("month",e.month):Xe("year",e.year)}function Yf(e){const{hour:t,minute:n,second:r,millisecond:i}=e,s=et(t,0,23)||t===24&&n===0&&r===0&&i===0,o=et(n,0,59),a=et(r,0,59),u=et(i,0,999);return s?o?a?u?!1:Xe("millisecond",i):Xe("second",r):Xe("minute",n):Xe("hour",t)}function V(e){return typeof e>"u"}function Yt(e){return typeof e=="number"}function ds(e){return typeof e=="number"&&e%1===0}function tg(e){return typeof e=="string"}function ng(e){return Object.prototype.toString.call(e)==="[object Date]"}function Jf(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Hf(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function rg(e){return Array.isArray(e)?e:[e]}function _u(e,t,n){if(e.length!==0)return e.reduce((r,i)=>{const s=[t(i),i];return r&&n(r[0],s[0])===r[0]?r:s},null)[1]}function ig(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function Kn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Zo(e){if(e==null)return null;if(typeof e!="object")throw new we("Week settings must be an object");if(!et(e.firstDay,1,7)||!et(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(t=>!et(t,1,7)))throw new we("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function et(e,t,n){return ds(e)&&e>=t&&e<=n}function sg(e,t){return e-t*Math.floor(e/t)}function le(e,t=2){const n=e<0;let r;return n?r="-"+(""+-e).padStart(t,"0"):r=(""+e).padStart(t,"0"),r}function qt(e){if(!(V(e)||e===null||e===""))return parseInt(e,10)}function an(e){if(!(V(e)||e===null||e===""))return parseFloat(e)}function Ta(e){if(!(V(e)||e===null||e==="")){const t=parseFloat("0."+e)*1e3;return Math.floor(t)}}function Ma(e,t,n=!1){const r=10**t;return(n?Math.trunc:Math.round)(e*r)/r}function Qr(e){return e%4===0&&(e%100!==0||e%400===0)}function Wn(e){return Qr(e)?366:365}function zi(e,t){const n=sg(t-1,12)+1,r=e+(t-n)/12;return n===2?Qr(r)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}function hs(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t),t.setUTCFullYear(e.year,e.month-1,e.day)),+t}function Vu(e,t,n){return-Fa(Sa(e,1,t),n)+t-1}function Nr(e,t=4,n=1){const r=Vu(e,t,n),i=Vu(e+1,t,n);return(Wn(e)-r+i)/7}function Yo(e){return e>99?e:e>te.twoDigitCutoffYear?1900+e:2e3+e}function Qf(e,t,n,r=null){const i=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};r&&(s.timeZone=r);const o={timeZoneName:t,...s},a=new Intl.DateTimeFormat(n,o).formatToParts(i).find(u=>u.type.toLowerCase()==="timezonename");return a?a.value:null}function ms(e,t){let n=parseInt(e,10);Number.isNaN(n)&&(n=0);const r=parseInt(t,10)||0,i=n<0||Object.is(n,-0)?-r:r;return n*60+i}function Xf(e){const t=Number(e);if(typeof e=="boolean"||e===""||Number.isNaN(t))throw new we(`Invalid unit value ${e}`);return t}function Gi(e,t){const n={};for(const r in e)if(Kn(e,r)){const i=e[r];if(i==null)continue;n[t(r)]=Xf(i)}return n}function kr(e,t){const n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=e>=0?"+":"-";switch(t){case"short":return`${i}${le(n,2)}:${le(r,2)}`;case"narrow":return`${i}${n}${r>0?`:${r}`:""}`;case"techie":return`${i}${le(n,2)}${le(r,2)}`;default:throw new RangeError(`Value format ${t} is out of range for property format`)}}function ps(e){return ig(e,["hour","minute","second","millisecond"])}const og=["January","February","March","April","May","June","July","August","September","October","November","December"],ed=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ag=["J","F","M","A","M","J","J","A","S","O","N","D"];function td(e){switch(e){case"narrow":return[...ag];case"short":return[...ed];case"long":return[...og];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const nd=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],rd=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ug=["M","T","W","T","F","S","S"];function id(e){switch(e){case"narrow":return[...ug];case"short":return[...rd];case"long":return[...nd];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const sd=["AM","PM"],lg=["Before Christ","Anno Domini"],cg=["BC","AD"],fg=["B","A"];function od(e){switch(e){case"narrow":return[...fg];case"short":return[...cg];case"long":return[...lg];default:return null}}function dg(e){return sd[e.hour<12?0:1]}function hg(e,t){return id(t)[e.weekday-1]}function mg(e,t){return td(t)[e.month-1]}function pg(e,t){return od(t)[e.year<0?0:1]}function gg(e,t,n="always",r=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(e)===-1;if(n==="auto"&&s){const c=e==="days";switch(t){case 1:return c?"tomorrow":`next ${i[e][0]}`;case-1:return c?"yesterday":`last ${i[e][0]}`;case 0:return c?"today":`this ${i[e][0]}`}}const o=Object.is(t,-0)||t<0,a=Math.abs(t),u=a===1,l=i[e],f=r?u?l[1]:l[2]||l[1]:u?i[e][0]:e;return o?`${a} ${f} ago`:`in ${a} ${f}`}function Uu(e,t){let n="";for(const r of e)r.literal?n+=r.val:n+=t(r.val);return n}const yg={D:qi,DD:Cf,DDD:kf,DDDD:Sf,t:Ff,tt:Tf,ttt:Mf,tttt:Nf,T:xf,TT:Bf,TTT:Pf,TTTT:Lf,f:If,ff:Of,fff:Vf,ffff:Wf,F:Rf,FF:_f,FFF:Uf,FFFF:qf};class Ee{static create(t,n={}){return new Ee(t,n)}static parseFormat(t){let n=null,r="",i=!1;const s=[];for(let o=0;o<t.length;o++){const a=t.charAt(o);a==="'"?(r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),n=null,r="",i=!i):i||a===n?r+=a:(r.length>0&&s.push({literal:/^\s+$/.test(r),val:r}),r=a,n=a)}return r.length>0&&s.push({literal:i||/^\s+$/.test(r),val:r}),s}static macroTokenToFormatOpts(t){return yg[t]}constructor(t,n){this.opts=n,this.loc=t,this.systemLoc=null}formatWithSystemDefault(t,n){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,{...this.opts,...n}).format()}dtFormatter(t,n={}){return this.loc.dtFormatter(t,{...this.opts,...n})}formatDateTime(t,n){return this.dtFormatter(t,n).format()}formatDateTimeParts(t,n){return this.dtFormatter(t,n).formatToParts()}formatInterval(t,n){return this.dtFormatter(t.start,n).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())}resolvedOptions(t,n){return this.dtFormatter(t,n).resolvedOptions()}num(t,n=0){if(this.opts.forceSimple)return le(t,n);const r={...this.opts};return n>0&&(r.padTo=n),this.loc.numberFormatter(r).format(t)}formatDateTimeFromString(t,n){const r=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(p,b)=>this.loc.extract(t,p,b),o=p=>t.isOffsetFixed&&t.offset===0&&p.allowZ?"Z":t.isValid?t.zone.formatOffset(t.ts,p.format):"",a=()=>r?dg(t):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),u=(p,b)=>r?mg(t,p):s(b?{month:p}:{month:p,day:"numeric"},"month"),l=(p,b)=>r?hg(t,p):s(b?{weekday:p}:{weekday:p,month:"long",day:"numeric"},"weekday"),f=p=>{const b=Ee.macroTokenToFormatOpts(p);return b?this.formatWithSystemDefault(t,b):p},c=p=>r?pg(t,p):s({era:p},"era"),d=p=>{switch(p){case"S":return this.num(t.millisecond);case"u":case"SSS":return this.num(t.millisecond,3);case"s":return this.num(t.second);case"ss":return this.num(t.second,2);case"uu":return this.num(Math.floor(t.millisecond/10),2);case"uuu":return this.num(Math.floor(t.millisecond/100));case"m":return this.num(t.minute);case"mm":return this.num(t.minute,2);case"h":return this.num(t.hour%12===0?12:t.hour%12);case"hh":return this.num(t.hour%12===0?12:t.hour%12,2);case"H":return this.num(t.hour);case"HH":return this.num(t.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return t.zone.offsetName(t.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return t.zone.offsetName(t.ts,{format:"long",locale:this.loc.locale});case"z":return t.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(t.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(t.day,2);case"c":return this.num(t.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"E":return this.num(t.weekday);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(t.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(t.month,2);case"LLL":return u("short",!0);case"LLLL":return u("long",!0);case"LLLLL":return u("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(t.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(t.month,2);case"MMM":return u("short",!1);case"MMMM":return u("long",!1);case"MMMMM":return u("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(t.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(t.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(t.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(t.year,6);case"G":return c("short");case"GG":return c("long");case"GGGGG":return c("narrow");case"kk":return this.num(t.weekYear.toString().slice(-2),2);case"kkkk":return this.num(t.weekYear,4);case"W":return this.num(t.weekNumber);case"WW":return this.num(t.weekNumber,2);case"n":return this.num(t.localWeekNumber);case"nn":return this.num(t.localWeekNumber,2);case"ii":return this.num(t.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(t.localWeekYear,4);case"o":return this.num(t.ordinal);case"ooo":return this.num(t.ordinal,3);case"q":return this.num(t.quarter);case"qq":return this.num(t.quarter,2);case"X":return this.num(Math.floor(t.ts/1e3));case"x":return this.num(t.ts);default:return f(p)}};return Uu(Ee.parseFormat(n),d)}formatDurationFromString(t,n){const r=u=>{switch(u[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=u=>l=>{const f=r(l);return f?this.num(u.get(f),l.length):l},s=Ee.parseFormat(n),o=s.reduce((u,{literal:l,val:f})=>l?u:u.concat(f),[]),a=t.shiftTo(...o.map(r).filter(u=>u));return Uu(s,i(a))}}const ad=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function rr(...e){const t=e.reduce((n,r)=>n+r.source,"");return RegExp(`^${t}$`)}function ir(...e){return t=>e.reduce(([n,r,i],s)=>{const[o,a,u]=s(t,i);return[{...n,...o},a||r,u]},[{},null,1]).slice(0,2)}function sr(e,...t){if(e==null)return[null,null];for(const[n,r]of t){const i=n.exec(e);if(i)return r(i)}return[null,null]}function ud(...e){return(t,n)=>{const r={};let i;for(i=0;i<e.length;i++)r[e[i]]=qt(t[n+i]);return[r,null,n+i]}}const ld=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,wg=`(?:${ld.source}?(?:\\[(${ad.source})\\])?)?`,Na=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,cd=RegExp(`${Na.source}${wg}`),xa=RegExp(`(?:T${cd.source})?`),bg=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,Eg=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Dg=/(\d{4})-?(\d{3})/,vg=ud("weekYear","weekNumber","weekDay"),Ag=ud("year","ordinal"),$g=/(\d{4})-(\d\d)-(\d\d)/,fd=RegExp(`${Na.source} ?(?:${ld.source}|(${ad.source}))?`),Cg=RegExp(`(?: ${fd.source})?`);function qn(e,t,n){const r=e[t];return V(r)?n:qt(r)}function kg(e,t){return[{year:qn(e,t),month:qn(e,t+1,1),day:qn(e,t+2,1)},null,t+3]}function or(e,t){return[{hours:qn(e,t,0),minutes:qn(e,t+1,0),seconds:qn(e,t+2,0),milliseconds:Ta(e[t+3])},null,t+4]}function Xr(e,t){const n=!e[t]&&!e[t+1],r=ms(e[t+1],e[t+2]),i=n?null:$e.instance(r);return[{},i,t+3]}function ei(e,t){const n=e[t]?Tt.create(e[t]):null;return[{},n,t+1]}const Sg=RegExp(`^T?${Na.source}$`),Fg=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Tg(e){const[t,n,r,i,s,o,a,u,l]=e,f=t[0]==="-",c=u&&u[0]==="-",d=(p,b=!1)=>p!==void 0&&(b||p&&f)?-p:p;return[{years:d(an(n)),months:d(an(r)),weeks:d(an(i)),days:d(an(s)),hours:d(an(o)),minutes:d(an(a)),seconds:d(an(u),u==="-0"),milliseconds:d(Ta(l),c)}]}const Mg={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Ba(e,t,n,r,i,s,o){const a={year:t.length===2?Yo(qt(t)):qt(t),month:ed.indexOf(n)+1,day:qt(r),hour:qt(i),minute:qt(s)};return o&&(a.second=qt(o)),e&&(a.weekday=e.length>3?nd.indexOf(e)+1:rd.indexOf(e)+1),a}const Ng=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function xg(e){const[,t,n,r,i,s,o,a,u,l,f,c]=e,d=Ba(t,i,r,n,s,o,a);let p;return u?p=Mg[u]:l?p=0:p=ms(f,c),[d,new $e(p)]}function Bg(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Pg=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Lg=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Ig=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function Wu(e){const[,t,n,r,i,s,o,a]=e;return[Ba(t,i,r,n,s,o,a),$e.utcInstance]}function Rg(e){const[,t,n,r,i,s,o,a]=e;return[Ba(t,a,n,r,i,s,o),$e.utcInstance]}const Og=rr(bg,xa),_g=rr(Eg,xa),Vg=rr(Dg,xa),Ug=rr(cd),dd=ir(kg,or,Xr,ei),Wg=ir(vg,or,Xr,ei),qg=ir(Ag,or,Xr,ei),jg=ir(or,Xr,ei);function zg(e){return sr(e,[Og,dd],[_g,Wg],[Vg,qg],[Ug,jg])}function Gg(e){return sr(Bg(e),[Ng,xg])}function Kg(e){return sr(e,[Pg,Wu],[Lg,Wu],[Ig,Rg])}function Zg(e){return sr(e,[Fg,Tg])}const Yg=ir(or);function Jg(e){return sr(e,[Sg,Yg])}const Hg=rr($g,Cg),Qg=rr(fd),Xg=ir(or,Xr,ei);function ey(e){return sr(e,[Hg,dd],[Qg,Xg])}const qu="Invalid Duration",hd={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},ty={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...hd},Ke=146097/400,An=146097/4800,ny={years:{quarters:4,months:12,weeks:Ke/7,days:Ke,hours:Ke*24,minutes:Ke*24*60,seconds:Ke*24*60*60,milliseconds:Ke*24*60*60*1e3},quarters:{months:3,weeks:Ke/28,days:Ke/4,hours:Ke*24/4,minutes:Ke*24*60/4,seconds:Ke*24*60*60/4,milliseconds:Ke*24*60*60*1e3/4},months:{weeks:An/7,days:An,hours:An*24,minutes:An*24*60,seconds:An*24*60*60,milliseconds:An*24*60*60*1e3},...hd},mn=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],ry=mn.slice(0).reverse();function _t(e,t,n=!1){const r={values:n?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new z(r)}function md(e,t){let n=t.milliseconds??0;for(const r of ry.slice(1))t[r]&&(n+=t[r]*e[r].milliseconds);return n}function ju(e,t){const n=md(e,t)<0?-1:1;mn.reduceRight((r,i)=>{if(V(t[i]))return r;if(r){const s=t[r]*n,o=e[i][r],a=Math.floor(s/o);t[i]+=a*n,t[r]-=a*o*n}return i},null),mn.reduce((r,i)=>{if(V(t[i]))return r;if(r){const s=t[r]%1;t[r]-=s,t[i]+=s*e[r][i]}return i},null)}function iy(e){const t={};for(const[n,r]of Object.entries(e))r!==0&&(t[n]=r);return t}class z{constructor(t){const n=t.conversionAccuracy==="longterm"||!1;let r=n?ny:ty;t.matrix&&(r=t.matrix),this.values=t.values,this.loc=t.loc||H.create(),this.conversionAccuracy=n?"longterm":"casual",this.invalid=t.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(t,n){return z.fromObject({milliseconds:t},n)}static fromObject(t,n={}){if(t==null||typeof t!="object")throw new we(`Duration.fromObject: argument expected to be an object, got ${t===null?"null":typeof t}`);return new z({values:Gi(t,z.normalizeUnit),loc:H.fromObject(n),conversionAccuracy:n.conversionAccuracy,matrix:n.matrix})}static fromDurationLike(t){if(Yt(t))return z.fromMillis(t);if(z.isDuration(t))return t;if(typeof t=="object")return z.fromObject(t);throw new we(`Unknown duration argument ${t} of type ${typeof t}`)}static fromISO(t,n){const[r]=Zg(t);return r?z.fromObject(r,n):z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static fromISOTime(t,n){const[r]=Jg(t);return r?z.fromObject(r,n):z.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static invalid(t,n=null){if(!t)throw new we("need to specify a reason the Duration is invalid");const r=t instanceof st?t:new st(t,n);if(te.throwOnInvalid)throw new Fp(r);return new z({invalid:r})}static normalizeUnit(t){const n={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t&&t.toLowerCase()];if(!n)throw new $f(t);return n}static isDuration(t){return t&&t.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(t,n={}){const r={...n,floor:n.round!==!1&&n.floor!==!1};return this.isValid?Ee.create(this.loc,r).formatDurationFromString(this,t):qu}toHuman(t={}){if(!this.isValid)return qu;const n=mn.map(r=>{const i=this.values[r];return V(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...t,unit:r.slice(0,-1)}).format(i)}).filter(r=>r);return this.loc.listFormatter({type:"conjunction",style:t.listStyle||"narrow",...t}).format(n)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let t="P";return this.years!==0&&(t+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(t+=this.months+this.quarters*3+"M"),this.weeks!==0&&(t+=this.weeks+"W"),this.days!==0&&(t+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(t+="T"),this.hours!==0&&(t+=this.hours+"H"),this.minutes!==0&&(t+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(t+=Ma(this.seconds+this.milliseconds/1e3,3)+"S"),t==="P"&&(t+="T0S"),t}toISOTime(t={}){if(!this.isValid)return null;const n=this.toMillis();return n<0||n>=864e5?null:(t={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...t,includeOffset:!1},U.fromMillis(n,{zone:"UTC"}).toISOTime(t))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?md(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(t){if(!this.isValid)return this;const n=z.fromDurationLike(t),r={};for(const i of mn)(Kn(n.values,i)||Kn(this.values,i))&&(r[i]=n.get(i)+this.get(i));return _t(this,{values:r},!0)}minus(t){if(!this.isValid)return this;const n=z.fromDurationLike(t);return this.plus(n.negate())}mapUnits(t){if(!this.isValid)return this;const n={};for(const r of Object.keys(this.values))n[r]=Xf(t(this.values[r],r));return _t(this,{values:n},!0)}get(t){return this[z.normalizeUnit(t)]}set(t){if(!this.isValid)return this;const n={...this.values,...Gi(t,z.normalizeUnit)};return _t(this,{values:n})}reconfigure({locale:t,numberingSystem:n,conversionAccuracy:r,matrix:i}={}){const o={loc:this.loc.clone({locale:t,numberingSystem:n}),matrix:i,conversionAccuracy:r};return _t(this,o)}as(t){return this.isValid?this.shiftTo(t).get(t):NaN}normalize(){if(!this.isValid)return this;const t=this.toObject();return ju(this.matrix,t),_t(this,{values:t},!0)}rescale(){if(!this.isValid)return this;const t=iy(this.normalize().shiftToAll().toObject());return _t(this,{values:t},!0)}shiftTo(...t){if(!this.isValid)return this;if(t.length===0)return this;t=t.map(o=>z.normalizeUnit(o));const n={},r={},i=this.toObject();let s;for(const o of mn)if(t.indexOf(o)>=0){s=o;let a=0;for(const l in r)a+=this.matrix[l][o]*r[l],r[l]=0;Yt(i[o])&&(a+=i[o]);const u=Math.trunc(a);n[o]=u,r[o]=(a*1e3-u*1e3)/1e3}else Yt(i[o])&&(r[o]=i[o]);for(const o in r)r[o]!==0&&(n[s]+=o===s?r[o]:r[o]/this.matrix[s][o]);return ju(this.matrix,n),_t(this,{values:n},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const t={};for(const n of Object.keys(this.values))t[n]=this.values[n]===0?0:-this.values[n];return _t(this,{values:t},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;function n(r,i){return r===void 0||r===0?i===void 0||i===0:r===i}for(const r of mn)if(!n(this.values[r],t.values[r]))return!1;return!0}}const $n="Invalid Interval";function sy(e,t){return!e||!e.isValid?oe.invalid("missing or invalid start"):!t||!t.isValid?oe.invalid("missing or invalid end"):t<e?oe.invalid("end before start",`The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`):null}class oe{constructor(t){this.s=t.start,this.e=t.end,this.invalid=t.invalid||null,this.isLuxonInterval=!0}static invalid(t,n=null){if(!t)throw new we("need to specify a reason the Interval is invalid");const r=t instanceof st?t:new st(t,n);if(te.throwOnInvalid)throw new Sp(r);return new oe({invalid:r})}static fromDateTimes(t,n){const r=dr(t),i=dr(n),s=sy(r,i);return s??new oe({start:r,end:i})}static after(t,n){const r=z.fromDurationLike(n),i=dr(t);return oe.fromDateTimes(i,i.plus(r))}static before(t,n){const r=z.fromDurationLike(n),i=dr(t);return oe.fromDateTimes(i.minus(r),i)}static fromISO(t,n){const[r,i]=(t||"").split("/",2);if(r&&i){let s,o;try{s=U.fromISO(r,n),o=s.isValid}catch{o=!1}let a,u;try{a=U.fromISO(i,n),u=a.isValid}catch{u=!1}if(o&&u)return oe.fromDateTimes(s,a);if(o){const l=z.fromISO(i,n);if(l.isValid)return oe.after(s,l)}else if(u){const l=z.fromISO(r,n);if(l.isValid)return oe.before(a,l)}}return oe.invalid("unparsable",`the input "${t}" can't be parsed as ISO 8601`)}static isInterval(t){return t&&t.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(t="milliseconds"){return this.isValid?this.toDuration(t).get(t):NaN}count(t="milliseconds",n){if(!this.isValid)return NaN;const r=this.start.startOf(t,n);let i;return n?.useLocaleWeeks?i=this.end.reconfigure({locale:r.locale}):i=this.end,i=i.startOf(t,n),Math.floor(i.diff(r,t).get(t))+(i.valueOf()!==this.end.valueOf())}hasSame(t){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,t):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(t){return this.isValid?this.s>t:!1}isBefore(t){return this.isValid?this.e<=t:!1}contains(t){return this.isValid?this.s<=t&&this.e>t:!1}set({start:t,end:n}={}){return this.isValid?oe.fromDateTimes(t||this.s,n||this.e):this}splitAt(...t){if(!this.isValid)return[];const n=t.map(dr).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),r=[];let{s:i}=this,s=0;for(;i<this.e;){const o=n[s]||this.e,a=+o>+this.e?this.e:o;r.push(oe.fromDateTimes(i,a)),i=a,s+=1}return r}splitBy(t){const n=z.fromDurationLike(t);if(!this.isValid||!n.isValid||n.as("milliseconds")===0)return[];let{s:r}=this,i=1,s;const o=[];for(;r<this.e;){const a=this.start.plus(n.mapUnits(u=>u*i));s=+a>+this.e?this.e:a,o.push(oe.fromDateTimes(r,s)),r=s,i+=1}return o}divideEqually(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}overlaps(t){return this.e>t.s&&this.s<t.e}abutsStart(t){return this.isValid?+this.e==+t.s:!1}abutsEnd(t){return this.isValid?+t.e==+this.s:!1}engulfs(t){return this.isValid?this.s<=t.s&&this.e>=t.e:!1}equals(t){return!this.isValid||!t.isValid?!1:this.s.equals(t.s)&&this.e.equals(t.e)}intersection(t){if(!this.isValid)return this;const n=this.s>t.s?this.s:t.s,r=this.e<t.e?this.e:t.e;return n>=r?null:oe.fromDateTimes(n,r)}union(t){if(!this.isValid)return this;const n=this.s<t.s?this.s:t.s,r=this.e>t.e?this.e:t.e;return oe.fromDateTimes(n,r)}static merge(t){const[n,r]=t.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return r&&n.push(r),n}static xor(t){let n=null,r=0;const i=[],s=t.map(u=>[{time:u.s,type:"s"},{time:u.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((u,l)=>u.time-l.time);for(const u of a)r+=u.type==="s"?1:-1,r===1?n=u.time:(n&&+n!=+u.time&&i.push(oe.fromDateTimes(n,u.time)),n=null);return oe.merge(i)}difference(...t){return oe.xor([this].concat(t)).map(n=>this.intersection(n)).filter(n=>n&&!n.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:$n}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(t=qi,n={}){return this.isValid?Ee.create(this.s.loc.clone(n),t).formatInterval(this):$n}toISO(t){return this.isValid?`${this.s.toISO(t)}/${this.e.toISO(t)}`:$n}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:$n}toISOTime(t){return this.isValid?`${this.s.toISOTime(t)}/${this.e.toISOTime(t)}`:$n}toFormat(t,{separator:n=" – "}={}){return this.isValid?`${this.s.toFormat(t)}${n}${this.e.toFormat(t)}`:$n}toDuration(t,n){return this.isValid?this.e.diff(this.s,t,n):z.invalid(this.invalidReason)}mapEndpoints(t){return oe.fromDateTimes(t(this.s),t(this.e))}}class mi{static hasDST(t=te.defaultZone){const n=U.now().setZone(t).set({month:12});return!t.isUniversal&&n.offset!==n.set({month:6}).offset}static isValidIANAZone(t){return Tt.isValidZone(t)}static normalizeZone(t){return zt(t,te.defaultZone)}static getStartOfWeek({locale:t=null,locObj:n=null}={}){return(n||H.create(t)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:t=null,locObj:n=null}={}){return(n||H.create(t)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:t=null,locObj:n=null}={}){return(n||H.create(t)).getWeekendDays().slice()}static months(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||H.create(n,r,s)).months(t)}static monthsFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||H.create(n,r,s)).months(t,!0)}static weekdays(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||H.create(n,r,null)).weekdays(t)}static weekdaysFormat(t="long",{locale:n=null,numberingSystem:r=null,locObj:i=null}={}){return(i||H.create(n,r,null)).weekdays(t,!0)}static meridiems({locale:t=null}={}){return H.create(t).meridiems()}static eras(t="short",{locale:n=null}={}){return H.create(n,null,"gregory").eras(t)}static features(){return{relative:Jf(),localeWeek:Hf()}}}function zu(e,t){const n=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),r=n(t)-n(e);return Math.floor(z.fromMillis(r).as("days"))}function oy(e,t,n){const r=[["years",(u,l)=>l.year-u.year],["quarters",(u,l)=>l.quarter-u.quarter+(l.year-u.year)*4],["months",(u,l)=>l.month-u.month+(l.year-u.year)*12],["weeks",(u,l)=>{const f=zu(u,l);return(f-f%7)/7}],["days",zu]],i={},s=e;let o,a;for(const[u,l]of r)n.indexOf(u)>=0&&(o=u,i[u]=l(e,t),a=s.plus(i),a>t?(i[u]--,e=s.plus(i),e>t&&(a=e,i[u]--,e=s.plus(i))):e=a);return[e,i,a,o]}function ay(e,t,n,r){let[i,s,o,a]=oy(e,t,n);const u=t-i,l=n.filter(c=>["hours","minutes","seconds","milliseconds"].indexOf(c)>=0);l.length===0&&(o<t&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+u/(o-i)));const f=z.fromObject(s,r);return l.length>0?z.fromMillis(u,r).shiftTo(...l).plus(f):f}const uy="missing Intl.DateTimeFormat.formatToParts support";function K(e,t=n=>n){return{regex:e,deser:([n])=>t(Hp(n))}}const ly=" ",pd=`[ ${ly}]`,gd=new RegExp(pd,"g");function cy(e){return e.replace(/\./g,"\\.?").replace(gd,pd)}function Gu(e){return e.replace(/\./g,"").replace(gd," ").toLowerCase()}function rt(e,t){return e===null?null:{regex:RegExp(e.map(cy).join("|")),deser:([n])=>e.findIndex(r=>Gu(n)===Gu(r))+t}}function Ku(e,t){return{regex:e,deser:([,n,r])=>ms(n,r),groups:t}}function pi(e){return{regex:e,deser:([t])=>t}}function fy(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function dy(e,t){const n=nt(t),r=nt(t,"{2}"),i=nt(t,"{3}"),s=nt(t,"{4}"),o=nt(t,"{6}"),a=nt(t,"{1,2}"),u=nt(t,"{1,3}"),l=nt(t,"{1,6}"),f=nt(t,"{1,9}"),c=nt(t,"{2,4}"),d=nt(t,"{4,6}"),p=$=>({regex:RegExp(fy($.val)),deser:([A])=>A,literal:!0}),D=($=>{if(e.literal)return p($);switch($.val){case"G":return rt(t.eras("short"),0);case"GG":return rt(t.eras("long"),0);case"y":return K(l);case"yy":return K(c,Yo);case"yyyy":return K(s);case"yyyyy":return K(d);case"yyyyyy":return K(o);case"M":return K(a);case"MM":return K(r);case"MMM":return rt(t.months("short",!0),1);case"MMMM":return rt(t.months("long",!0),1);case"L":return K(a);case"LL":return K(r);case"LLL":return rt(t.months("short",!1),1);case"LLLL":return rt(t.months("long",!1),1);case"d":return K(a);case"dd":return K(r);case"o":return K(u);case"ooo":return K(i);case"HH":return K(r);case"H":return K(a);case"hh":return K(r);case"h":return K(a);case"mm":return K(r);case"m":return K(a);case"q":return K(a);case"qq":return K(r);case"s":return K(a);case"ss":return K(r);case"S":return K(u);case"SSS":return K(i);case"u":return pi(f);case"uu":return pi(a);case"uuu":return K(n);case"a":return rt(t.meridiems(),0);case"kkkk":return K(s);case"kk":return K(c,Yo);case"W":return K(a);case"WW":return K(r);case"E":case"c":return K(n);case"EEE":return rt(t.weekdays("short",!1),1);case"EEEE":return rt(t.weekdays("long",!1),1);case"ccc":return rt(t.weekdays("short",!0),1);case"cccc":return rt(t.weekdays("long",!0),1);case"Z":case"ZZ":return Ku(new RegExp(`([+-]${a.source})(?::(${r.source}))?`),2);case"ZZZ":return Ku(new RegExp(`([+-]${a.source})(${r.source})?`),2);case"z":return pi(/[a-z_+-/]{1,256}?/i);case" ":return pi(/[^\S\n\r]/);default:return p($)}})(e)||{invalidReason:uy};return D.token=e,D}const hy={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function my(e,t,n){const{type:r,value:i}=e;if(r==="literal"){const u=/^\s+$/.test(i);return{literal:!u,val:u?" ":i}}const s=t[r];let o=r;r==="hour"&&(t.hour12!=null?o=t.hour12?"hour12":"hour24":t.hourCycle!=null?t.hourCycle==="h11"||t.hourCycle==="h12"?o="hour12":o="hour24":o=n.hour12?"hour12":"hour24");let a=hy[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function py(e){return[`^${e.map(n=>n.regex).reduce((n,r)=>`${n}(${r.source})`,"")}$`,e]}function gy(e,t,n){const r=e.match(t);if(r){const i={};let s=1;for(const o in n)if(Kn(n,o)){const a=n[o],u=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(r.slice(s,s+u))),s+=u}return[r,i]}else return[r,{}]}function yy(e){const t=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let n=null,r;return V(e.z)||(n=Tt.create(e.z)),V(e.Z)||(n||(n=new $e(e.Z)),r=e.Z),V(e.q)||(e.M=(e.q-1)*3+1),V(e.h)||(e.h<12&&e.a===1?e.h+=12:e.h===12&&e.a===0&&(e.h=0)),e.G===0&&e.y&&(e.y=-e.y),V(e.u)||(e.S=Ta(e.u)),[Object.keys(e).reduce((s,o)=>{const a=t(o);return a&&(s[a]=e[o]),s},{}),n,r]}let io=null;function wy(){return io||(io=U.fromMillis(1555555555555)),io}function by(e,t){if(e.literal)return e;const n=Ee.macroTokenToFormatOpts(e.val),r=Ed(n,t);return r==null||r.includes(void 0)?e:r}function yd(e,t){return Array.prototype.concat(...e.map(n=>by(n,t)))}class wd{constructor(t,n){if(this.locale=t,this.format=n,this.tokens=yd(Ee.parseFormat(n),t),this.units=this.tokens.map(r=>dy(r,t)),this.disqualifyingUnit=this.units.find(r=>r.invalidReason),!this.disqualifyingUnit){const[r,i]=py(this.units);this.regex=RegExp(r,"i"),this.handlers=i}}explainFromTokens(t){if(this.isValid){const[n,r]=gy(t,this.regex,this.handlers),[i,s,o]=r?yy(r):[null,null,void 0];if(Kn(r,"a")&&Kn(r,"H"))throw new On("Can't include meridiem when specifying 24-hour format");return{input:t,tokens:this.tokens,regex:this.regex,rawMatches:n,matches:r,result:i,zone:s,specificOffset:o}}else return{input:t,tokens:this.tokens,invalidReason:this.invalidReason}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function bd(e,t,n){return new wd(e,n).explainFromTokens(t)}function Ey(e,t,n){const{result:r,zone:i,specificOffset:s,invalidReason:o}=bd(e,t,n);return[r,i,s,o]}function Ed(e,t){if(!e)return null;const r=Ee.create(t,e).dtFormatter(wy()),i=r.formatToParts(),s=r.resolvedOptions();return i.map(o=>my(o,e,s))}const so="Invalid DateTime",Dy=864e13;function Er(e){return new st("unsupported zone",`the zone "${e.name}" is not supported`)}function oo(e){return e.weekData===null&&(e.weekData=ji(e.c)),e.weekData}function ao(e){return e.localWeekData===null&&(e.localWeekData=ji(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function un(e,t){const n={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new U({...n,...t,old:n})}function Dd(e,t,n){let r=e-t*60*1e3;const i=n.offset(r);if(t===i)return[r,t];r-=(i-t)*60*1e3;const s=n.offset(r);return i===s?[r,i]:[e-Math.min(i,s)*60*1e3,Math.max(i,s)]}function gi(e,t){e+=t*60*1e3;const n=new Date(e);return{year:n.getUTCFullYear(),month:n.getUTCMonth()+1,day:n.getUTCDate(),hour:n.getUTCHours(),minute:n.getUTCMinutes(),second:n.getUTCSeconds(),millisecond:n.getUTCMilliseconds()}}function Pi(e,t,n){return Dd(hs(e),t,n)}function Zu(e,t){const n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+Math.trunc(t.quarters)*3,s={...e.c,year:r,month:i,day:Math.min(e.c.day,zi(r,i))+Math.trunc(t.days)+Math.trunc(t.weeks)*7},o=z.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),a=hs(s);let[u,l]=Dd(a,n,e.zone);return o!==0&&(u+=o,l=e.zone.offset(u)),{ts:u,o:l}}function Cn(e,t,n,r,i,s){const{setZone:o,zone:a}=n;if(e&&Object.keys(e).length!==0||t){const u=t||a,l=U.fromObject(e,{...n,zone:u,specificOffset:s});return o?l:l.setZone(a)}else return U.invalid(new st("unparsable",`the input "${i}" can't be parsed as ${r}`))}function yi(e,t,n=!0){return e.isValid?Ee.create(H.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function uo(e,t){const n=e.c.year>9999||e.c.year<0;let r="";return n&&e.c.year>=0&&(r+="+"),r+=le(e.c.year,n?6:4),t?(r+="-",r+=le(e.c.month),r+="-",r+=le(e.c.day)):(r+=le(e.c.month),r+=le(e.c.day)),r}function Yu(e,t,n,r,i,s){let o=le(e.c.hour);return t?(o+=":",o+=le(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=":")):o+=le(e.c.minute),(e.c.millisecond!==0||e.c.second!==0||!n)&&(o+=le(e.c.second),(e.c.millisecond!==0||!r)&&(o+=".",o+=le(e.c.millisecond,3))),i&&(e.isOffsetFixed&&e.offset===0&&!s?o+="Z":e.o<0?(o+="-",o+=le(Math.trunc(-e.o/60)),o+=":",o+=le(Math.trunc(-e.o%60))):(o+="+",o+=le(Math.trunc(e.o/60)),o+=":",o+=le(Math.trunc(e.o%60)))),s&&(o+="["+e.zone.ianaName+"]"),o}const vd={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},vy={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Ay={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Ad=["year","month","day","hour","minute","second","millisecond"],$y=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Cy=["year","ordinal","hour","minute","second","millisecond"];function ky(e){const t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new $f(e);return t}function Ju(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return ky(e)}}function Sy(e){return Ii[e]||(Li===void 0&&(Li=te.now()),Ii[e]=e.offset(Li)),Ii[e]}function Hu(e,t){const n=zt(t.zone,te.defaultZone);if(!n.isValid)return U.invalid(Er(n));const r=H.fromObject(t);let i,s;if(V(e.year))i=te.now();else{for(const u of Ad)V(e[u])&&(e[u]=vd[u]);const o=Zf(e)||Yf(e);if(o)return U.invalid(o);const a=Sy(n);[i,s]=Pi(e,a,n)}return new U({ts:i,zone:n,loc:r,o:s})}function Qu(e,t,n){const r=V(n.round)?!0:n.round,i=(o,a)=>(o=Ma(o,r||n.calendary?0:2,!0),t.loc.clone(n).relFormatter(n).format(o,a)),s=o=>n.calendary?t.hasSame(e,o)?0:t.startOf(o).diff(e.startOf(o),o).get(o):t.diff(e,o).get(o);if(n.unit)return i(s(n.unit),n.unit);for(const o of n.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(e>t?-0:0,n.units[n.units.length-1])}function Xu(e){let t={},n;return e.length>0&&typeof e[e.length-1]=="object"?(t=e[e.length-1],n=Array.from(e).slice(0,e.length-1)):n=Array.from(e),[t,n]}let Li,Ii={};class U{constructor(t){const n=t.zone||te.defaultZone;let r=t.invalid||(Number.isNaN(t.ts)?new st("invalid input"):null)||(n.isValid?null:Er(n));this.ts=V(t.ts)?te.now():t.ts;let i=null,s=null;if(!r)if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(n))[i,s]=[t.old.c,t.old.o];else{const a=Yt(t.o)&&!t.old?t.o:n.offset(this.ts);i=gi(this.ts,a),r=Number.isNaN(i.year)?new st("invalid input"):null,i=r?null:i,s=r?null:a}this._zone=n,this.loc=t.loc||H.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new U({})}static local(){const[t,n]=Xu(arguments),[r,i,s,o,a,u,l]=n;return Hu({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static utc(){const[t,n]=Xu(arguments),[r,i,s,o,a,u,l]=n;return t.zone=$e.utcInstance,Hu({year:r,month:i,day:s,hour:o,minute:a,second:u,millisecond:l},t)}static fromJSDate(t,n={}){const r=ng(t)?t.valueOf():NaN;if(Number.isNaN(r))return U.invalid("invalid input");const i=zt(n.zone,te.defaultZone);return i.isValid?new U({ts:r,zone:i,loc:H.fromObject(n)}):U.invalid(Er(i))}static fromMillis(t,n={}){if(Yt(t))return t<-864e13||t>Dy?U.invalid("Timestamp out of range"):new U({ts:t,zone:zt(n.zone,te.defaultZone),loc:H.fromObject(n)});throw new we(`fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`)}static fromSeconds(t,n={}){if(Yt(t))return new U({ts:t*1e3,zone:zt(n.zone,te.defaultZone),loc:H.fromObject(n)});throw new we("fromSeconds requires a numerical input")}static fromObject(t,n={}){t=t||{};const r=zt(n.zone,te.defaultZone);if(!r.isValid)return U.invalid(Er(r));const i=H.fromObject(n),s=Gi(t,Ju),{minDaysInFirstWeek:o,startOfWeek:a}=Ou(s,i),u=te.now(),l=V(n.specificOffset)?r.offset(u):n.specificOffset,f=!V(s.ordinal),c=!V(s.year),d=!V(s.month)||!V(s.day),p=c||d,b=s.weekYear||s.weekNumber;if((p||f)&&b)throw new On("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(d&&f)throw new On("Can't mix ordinal dates with month/day");const D=b||s.weekday&&!p;let $,A,F=gi(u,l);D?($=$y,A=vy,F=ji(F,o,a)):f?($=Cy,A=Ay,F=ro(F)):($=Ad,A=vd);let I=!1;for(const dt of $){const on=s[dt];V(on)?I?s[dt]=A[dt]:s[dt]=F[dt]:I=!0}const _=D?Xp(s,o,a):f?eg(s):Zf(s),G=_||Yf(s);if(G)return U.invalid(G);const Ae=D?Iu(s,o,a):f?Ru(s):s,[Rt,ke]=Pi(Ae,l,r),Re=new U({ts:Rt,zone:r,o:ke,loc:i});return s.weekday&&p&&t.weekday!==Re.weekday?U.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Re.toISO()}`):Re.isValid?Re:U.invalid(Re.invalid)}static fromISO(t,n={}){const[r,i]=zg(t);return Cn(r,i,n,"ISO 8601",t)}static fromRFC2822(t,n={}){const[r,i]=Gg(t);return Cn(r,i,n,"RFC 2822",t)}static fromHTTP(t,n={}){const[r,i]=Kg(t);return Cn(r,i,n,"HTTP",n)}static fromFormat(t,n,r={}){if(V(t)||V(n))throw new we("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=r,o=H.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,u,l,f]=Ey(o,t,n);return f?U.invalid(f):Cn(a,u,r,`format ${n}`,t,l)}static fromString(t,n,r={}){return U.fromFormat(t,n,r)}static fromSQL(t,n={}){const[r,i]=ey(t);return Cn(r,i,n,"SQL",t)}static invalid(t,n=null){if(!t)throw new we("need to specify a reason the DateTime is invalid");const r=t instanceof st?t:new st(t,n);if(te.throwOnInvalid)throw new kp(r);return new U({invalid:r})}static isDateTime(t){return t&&t.isLuxonDateTime||!1}static parseFormatForOpts(t,n={}){const r=Ed(t,H.fromObject(n));return r?r.map(i=>i?i.val:null).join(""):null}static expandFormat(t,n={}){return yd(Ee.parseFormat(t),H.fromObject(n)).map(i=>i.val).join("")}static resetCache(){Li=void 0,Ii={}}get(t){return this[t]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?oo(this).weekYear:NaN}get weekNumber(){return this.isValid?oo(this).weekNumber:NaN}get weekday(){return this.isValid?oo(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?ao(this).weekday:NaN}get localWeekNumber(){return this.isValid?ao(this).weekNumber:NaN}get localWeekYear(){return this.isValid?ao(this).weekYear:NaN}get ordinal(){return this.isValid?ro(this.c).ordinal:NaN}get monthShort(){return this.isValid?mi.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?mi.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?mi.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?mi.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const t=864e5,n=6e4,r=hs(this.c),i=this.zone.offset(r-t),s=this.zone.offset(r+t),o=this.zone.offset(r-i*n),a=this.zone.offset(r-s*n);if(o===a)return[this];const u=r-o*n,l=r-a*n,f=gi(u,o),c=gi(l,a);return f.hour===c.hour&&f.minute===c.minute&&f.second===c.second&&f.millisecond===c.millisecond?[un(this,{ts:u}),un(this,{ts:l})]:[this]}get isInLeapYear(){return Qr(this.year)}get daysInMonth(){return zi(this.year,this.month)}get daysInYear(){return this.isValid?Wn(this.year):NaN}get weeksInWeekYear(){return this.isValid?Nr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?Nr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(t={}){const{locale:n,numberingSystem:r,calendar:i}=Ee.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:n,numberingSystem:r,outputCalendar:i}}toUTC(t=0,n={}){return this.setZone($e.instance(t),n)}toLocal(){return this.setZone(te.defaultZone)}setZone(t,{keepLocalTime:n=!1,keepCalendarTime:r=!1}={}){if(t=zt(t,te.defaultZone),t.equals(this.zone))return this;if(t.isValid){let i=this.ts;if(n||r){const s=t.offset(this.ts),o=this.toObject();[i]=Pi(o,s,t)}return un(this,{ts:i,zone:t})}else return U.invalid(Er(t))}reconfigure({locale:t,numberingSystem:n,outputCalendar:r}={}){const i=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:r});return un(this,{loc:i})}setLocale(t){return this.reconfigure({locale:t})}set(t){if(!this.isValid)return this;const n=Gi(t,Ju),{minDaysInFirstWeek:r,startOfWeek:i}=Ou(n,this.loc),s=!V(n.weekYear)||!V(n.weekNumber)||!V(n.weekday),o=!V(n.ordinal),a=!V(n.year),u=!V(n.month)||!V(n.day),l=a||u,f=n.weekYear||n.weekNumber;if((l||o)&&f)throw new On("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&o)throw new On("Can't mix ordinal dates with month/day");let c;s?c=Iu({...ji(this.c,r,i),...n},r,i):V(n.ordinal)?(c={...this.toObject(),...n},V(n.day)&&(c.day=Math.min(zi(c.year,c.month),c.day))):c=Ru({...ro(this.c),...n});const[d,p]=Pi(c,this.o,this.zone);return un(this,{ts:d,o:p})}plus(t){if(!this.isValid)return this;const n=z.fromDurationLike(t);return un(this,Zu(this,n))}minus(t){if(!this.isValid)return this;const n=z.fromDurationLike(t).negate();return un(this,Zu(this,n))}startOf(t,{useLocaleWeeks:n=!1}={}){if(!this.isValid)return this;const r={},i=z.normalizeUnit(t);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0;break}if(i==="weeks")if(n){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(r.weekNumber=this.weekNumber-1),r.weekday=s}else r.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);r.month=(s-1)*3+1}return this.set(r)}endOf(t,n){return this.isValid?this.plus({[t]:1}).startOf(t,n).minus(1):this}toFormat(t,n={}){return this.isValid?Ee.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this,t):so}toLocaleString(t=qi,n={}){return this.isValid?Ee.create(this.loc.clone(n),t).formatDateTime(this):so}toLocaleParts(t={}){return this.isValid?Ee.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}toISO({format:t="extended",suppressSeconds:n=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=t==="extended";let a=uo(this,o);return a+="T",a+=Yu(this,o,n,r,i,s),a}toISODate({format:t="extended"}={}){return this.isValid?uo(this,t==="extended"):null}toISOWeekDate(){return yi(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:t=!1,suppressSeconds:n=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+Yu(this,o==="extended",n,t,r,s):null}toRFC2822(){return yi(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return yi(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?uo(this,!0):null}toSQLTime({includeOffset:t=!0,includeZone:n=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(n||t)&&(r&&(i+=" "),n?i+="z":t&&(i+="ZZ")),yi(this,i,!0)}toSQL(t={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(t)}`:null}toString(){return this.isValid?this.toISO():so}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(t={}){if(!this.isValid)return{};const n={...this.c};return t.includeConfig&&(n.outputCalendar=this.outputCalendar,n.numberingSystem=this.loc.numberingSystem,n.locale=this.loc.locale),n}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(t,n="milliseconds",r={}){if(!this.isValid||!t.isValid)return z.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...r},s=rg(n).map(z.normalizeUnit),o=t.valueOf()>this.valueOf(),a=o?this:t,u=o?t:this,l=ay(a,u,s,i);return o?l.negate():l}diffNow(t="milliseconds",n={}){return this.diff(U.now(),t,n)}until(t){return this.isValid?oe.fromDateTimes(this,t):this}hasSame(t,n,r){if(!this.isValid)return!1;const i=t.valueOf(),s=this.setZone(t.zone,{keepLocalTime:!0});return s.startOf(n,r)<=i&&i<=s.endOf(n,r)}equals(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}toRelative(t={}){if(!this.isValid)return null;const n=t.base||U.fromObject({},{zone:this.zone}),r=t.padding?this<n?-t.padding:t.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=t.unit;return Array.isArray(t.unit)&&(i=t.unit,s=void 0),Qu(n,this.plus(r),{...t,numeric:"always",units:i,unit:s})}toRelativeCalendar(t={}){return this.isValid?Qu(t.base||U.fromObject({},{zone:this.zone}),this,{...t,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...t){if(!t.every(U.isDateTime))throw new we("min requires all arguments be DateTimes");return _u(t,n=>n.valueOf(),Math.min)}static max(...t){if(!t.every(U.isDateTime))throw new we("max requires all arguments be DateTimes");return _u(t,n=>n.valueOf(),Math.max)}static fromFormatExplain(t,n,r={}){const{locale:i=null,numberingSystem:s=null}=r,o=H.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return bd(o,t,n)}static fromStringExplain(t,n,r={}){return U.fromFormatExplain(t,n,r)}static buildFormatParser(t,n={}){const{locale:r=null,numberingSystem:i=null}=n,s=H.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0});return new wd(s,t)}static fromFormatParser(t,n,r={}){if(V(t)||V(n))throw new we("fromFormatParser requires an input string and a format parser");const{locale:i=null,numberingSystem:s=null}=r,o=H.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});if(!o.equals(n.locale))throw new we(`fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`);const{result:a,zone:u,specificOffset:l,invalidReason:f}=n.explainFromTokens(t);return f?U.invalid(f):Cn(a,u,r,`format ${n.format}`,t,l)}static get DATE_SHORT(){return qi}static get DATE_MED(){return Cf}static get DATE_MED_WITH_WEEKDAY(){return Tp}static get DATE_FULL(){return kf}static get DATE_HUGE(){return Sf}static get TIME_SIMPLE(){return Ff}static get TIME_WITH_SECONDS(){return Tf}static get TIME_WITH_SHORT_OFFSET(){return Mf}static get TIME_WITH_LONG_OFFSET(){return Nf}static get TIME_24_SIMPLE(){return xf}static get TIME_24_WITH_SECONDS(){return Bf}static get TIME_24_WITH_SHORT_OFFSET(){return Pf}static get TIME_24_WITH_LONG_OFFSET(){return Lf}static get DATETIME_SHORT(){return If}static get DATETIME_SHORT_WITH_SECONDS(){return Rf}static get DATETIME_MED(){return Of}static get DATETIME_MED_WITH_SECONDS(){return _f}static get DATETIME_MED_WITH_WEEKDAY(){return Mp}static get DATETIME_FULL(){return Vf}static get DATETIME_FULL_WITH_SECONDS(){return Uf}static get DATETIME_HUGE(){return Wf}static get DATETIME_HUGE_WITH_SECONDS(){return qf}}function dr(e){if(U.isDateTime(e))return e;if(e&&e.valueOf&&Yt(e.valueOf()))return U.fromJSDate(e);if(e&&typeof e=="object")return U.fromObject(e);throw new we(`Unknown datetime argument: ${e}, of type ${typeof e}`)}var R;(function(e){e.Years="years",e.Quarters="quarters",e.Months="months",e.Weeks="weeks",e.Days="days",e.Hours="hours",e.Minutes="minutes",e.Seconds="seconds",e.Milliseconds="milliseconds"})(R||(R={}));R.Years+"",R.Quarters+"",R.Months+"",R.Weeks+"",R.Days+"",R.Hours+"",R.Minutes+"",R.Seconds+"",R.Milliseconds+"";R.Years+"",R.Quarters+"",R.Months+"",R.Weeks+"",R.Days+"",R.Hours+"",R.Minutes+"",R.Seconds+"",R.Milliseconds+"";const $d=[R.Milliseconds,R.Seconds,R.Minutes,R.Hours,R.Days,R.Weeks,R.Months,R.Quarters,R.Years];R.Milliseconds+"",R.Seconds+"",R.Minutes+"",R.Hours+"",R.Days+"",R.Weeks+"",R.Months+"",R.Quarters+"",R.Years+"";function Fy(e){return $d.filter(t=>e[t])}function Jo(e,{roundToDigits:t}){if(t==null)return e;const n=Math.pow(10,t),r=e*n;return Number((Math.round(r)/n).toFixed(t))}function Ty(e){return Jo(Math.max(e-.4,0),{roundToDigits:0})}function el(e){return e===0?0:Math.sign(e)}function lt(e,t,n={}){const r={},i={roundToDigits:n.roundToDigits==null?void 0:Math.round(Math.abs(n.roundToDigits))},s=Object.values(e).includes(1/0),o=Object.values(e).includes(-1/0);let a=z.fromObject(e).as(R.Milliseconds);const u=Fy(t).reverse(),l=el(a);u.forEach((p,b)=>{const D=b===u.length-1;if(s&&o||s)r[p]=1/0;else if(o)r[p]=-1/0;else if(p===R.Milliseconds)r.milliseconds=Jo(a,i);else{const $=z.fromObject({milliseconds:a}).as(p),A=Math.sign($),F=Math.abs($),I=D?Jo(F,i):Math.floor(i.roundToDigits==null?F:Ty(F)),_=I===0?0:I*A;r[p]=_,a-=z.fromObject({[p]:_}).as(R.Milliseconds),l!==el(a)&&(a=0)}});let f=!1;const c=[],d=$d.toReversed().filter(p=>r[p]?(f=!0,!0):f?(c.push(p),!1):!0);if(d.length<u.length){const p={};d.forEach(D=>p[D]=!0);const b=lt(e,p,i);return c.forEach(D=>b[D]=0),b}return r}var L;(function(e){e.Year="year",e.Quarter="quarter",e.Month="month",e.Week="week",e.Day="day",e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(L||(L={}));L.Year,L.Hour,L.Minute,L.Second,L.Millisecond;L.Quarter,L.Month,L.Week,L.Day;L.Millisecond,L.Second,L.Minute,L.Hour,L.Day,L.Week,L.Month,L.Quarter,L.Year;var be;(function(e){e.Sunday="Sunday",e.Monday="Monday",e.Tuesday="Tuesday",e.Wednesday="Wednesday",e.Thursday="Thursday",e.Friday="Friday",e.Saturday="Saturday"})(be||(be={}));be.Sunday+"",be.Monday+"",be.Tuesday+"",be.Wednesday+"",be.Thursday+"",be.Friday+"",be.Saturday+"";be.Sunday,be.Monday,be.Tuesday,be.Wednesday,be.Thursday,be.Friday,be.Saturday;var Te;(function(e){e.January="January",e.February="February",e.March="March",e.April="April",e.May="May",e.June="June",e.July="July",e.August="August",e.September="September",e.October="October",e.November="November",e.December="December"})(Te||(Te={}));Te.January,Te.February,Te.March,Te.April,Te.May,Te.June,Te.July,Te.August,Te.September,Te.October,Te.November,Te.December;const tl={min:1,max:12},nl={min:1,max:31},rl={min:0,max:23},il={min:0,max:59},sl={min:0,max:59},ol={min:0,max:999};function xr(e){const t=new Af,n=lt(e,{milliseconds:!0}).milliseconds;return n!==1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}var Cd=typeof process<"u"&&process.versions!=null&&process.versions.node!=null;typeof window<"u"&&window.name==="nodejs"||typeof navigator<"u"&&"userAgent"in navigator&&typeof navigator.userAgent=="string"&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));typeof Deno<"u"&&typeof Deno.version<"u"&&typeof Deno.version.deno<"u";typeof process<"u"&&process.versions!=null&&process.versions.bun!=null;var Mt;(function(e){e.Node="node",e.Web="web"})(Mt||(Mt={}));function My(){return Cd?Mt.Node:Mt.Web}const kd=My();function Ny(e){return kd===e}function Sd(e){return e[kd]()}let h=class extends Error{name="AssertionError";constructor(t,n){super(Yr(n,t)||"Assertion failed.")}};const al={interval:{milliseconds:100},timeout:{seconds:10}},lo=Symbol("not set");async function Fd(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:s,options:o}=xy(t),a=lt(o.timeout,{milliseconds:!0}).milliseconds,u=lt(o.interval,{milliseconds:!0});let l=lo,f;async function c(){try{l=n?r():await r(),e(l,...i)}catch(p){l=lo,f=Be(p)}}const d=Date.now();for(;l===lo;)if(await c(),await xr(u),Date.now()-d>=a){const b=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw Jr(f,b)}return l}function C(e,t=!1){return(...n)=>Fd(e,n,t)}function xy(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Td(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Td(e){return{interval:e?.interval||al.interval,timeout:e?.timeout||al.timeout}}const hr={isFalse(e,t){if(e!==!1)throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t)},isTrue(e,t){if(e!==!0)throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(!e)throw new h(`'${m(e)}' is not truthy.`,t)}},Md={assert:hr,check:{isFalse(e){return e===!1},isFalsy(e){return!e},isTrue(e){return e===!0},isTruthy(e){return!!e}},assertWrap:{isFalse(e,t){if(e===!1)return e;throw new h(`'${m(e)}' is not false.`,t)},isFalsy(e,t){if(e)throw new h(`'${m(e)}' is not falsy.`,t);return e},isTrue(e,t){if(e===!0)return e;throw new h(`'${m(e)}' is not true.`,t)},isTruthy(e,t){if(e)return e;throw new h(`'${m(e)}' is not truthy.`,t)}},checkWrap:{isFalse(e){if(e===!1)return e},isFalsy(e){if(!e)return e},isTrue(e){if(e===!0)return e},isTruthy(e){if(e)return e}},waitUntil:{isFalse:C(hr.isFalse),isFalsy:C(hr.isFalsy),isTrue:C(hr.isTrue),isTruthy:C(hr.isTruthy)}};function By(e,t,n){if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,n)}function Py(e,t,n){if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,n)}function Ly(e,t,n){if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,n)}function Iy(e,t,n){if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,n)}const mr={endsWith:By,endsWithout:Py,startsWith:Ly,startsWithout:Iy},Nd={assert:mr,check:{endsWith:(e,t)=>typeof e=="string"?e.endsWith(t):e[e.length-1]===t,endsWithout:(e,t)=>typeof e=="string"?!e.endsWith(t):e[e.length-1]!==t,startsWith:(e,t)=>typeof e=="string"?e.startsWith(t):e[0]===t,startsWithout:(e,t)=>typeof e=="string"?!e.startsWith(t):e[0]!==t},assertWrap:{endsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.endsWith(t))throw new h(`${m(e)} does not end with ${m(t)}}`,n)}else if(e[e.length-1]!==t)throw new h(`${m(e)} does not end with ${m(t)}}`,n);return e},endsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.endsWith(t))throw new h(`${m(e)} ends with ${m(t)}}`,n)}else if(e[e.length-1]===t)throw new h(`${m(e)} ends with ${m(t)}}`,n);return e},startsWith:(e,t,n)=>{if(typeof e=="string"){if(!e.startsWith(t))throw new h(`${m(e)} does not start with ${m(t)}}`,n)}else if(e[0]!==t)throw new h(`${m(e)} does not start with ${m(t)}}`,n);return e},startsWithout:(e,t,n)=>{if(typeof e=="string"){if(e.startsWith(t))throw new h(`${m(e)} starts with ${m(t)}}`,n)}else if(e[0]===t)throw new h(`${m(e)} starts with ${m(t)}}`,n);return e}},checkWrap:{endsWith:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?e:void 0;if(e[e.length-1]===t)return e},endsWithout:(e,t)=>{if(typeof e=="string")return e.endsWith(t)?void 0:e;if(e[e.length-1]!==t)return e},startsWith:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?e:void 0;if(e[0]===t)return e},startsWithout:(e,t)=>{if(typeof e=="string")return e.startsWith(t)?void 0:e;if(e[0]!==t)return e}},waitUntil:{endsWith:C(mr.endsWith),endsWithout:C(mr.endsWithout),startsWith:C(mr.startsWith),startsWithout:C(mr.startsWithout)}};function Ry(e,t,n){const r=$t(t);if(!r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function vt(e,t){return $t(t).includes(e)}const co={isEnumValue(e,t,n){Ry(e,t,n)},isNotEnumValue(e,t,n){const r=$t(t);if(r.includes(e))throw new h(`${String(e)} is an enum value in '${r.join(",")}'.`,n)}},xd={assert:co,check:{isEnumValue:vt,isNotEnumValue(e,t){return!$t(t).includes(e)}},assertWrap:{isEnumValue(e,t,n){const r=$t(t);if(!r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e},isNotEnumValue(e,t,n){const r=$t(t);if(r.includes(e))throw new h(`${String(e)} is not an enum value in '${r.join(",")}'.`,n);return e}},checkWrap:{isEnumValue(e,t){if($t(t).includes(e))return e},isNotEnumValue(e,t){if(!$t(t).includes(e))return e}},waitUntil:{isEnumValue:C(co.isEnumValue),isNotEnumValue:C(co.isNotEnumValue)}},fo={entriesEqual(e,t,n){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new h(`Entries are not equal at key '${String(i)}'.`,n)})},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(!Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))throw new h("Entries are equal.",n)}},Bd={assert:fo,check:{entriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!1:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(r=>{const i=e[r],s=t[r];return i===s})},notEntriesEqual(e,t){return!e||typeof e!="object"||!t||typeof t!="object"?!0:Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(r=>{const i=e[r],s=t[r];return i!==s})}},assertWrap:{entriesEqual(e,t,n){if(!e||typeof e!="object")throw new h(`${m(e)} is not an object.`,n);if(!t||typeof t!="object")throw new h(`${m(t)} is not an object.`,n);return Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];if(s!==o)throw new h(`Entries are not equal at key '${String(i)}'.`,n)}),e},notEntriesEqual(e,t,n){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(s=>{const o=e[s],a=t[s];return o!==a}))return e;throw new h("Entries are equal.",n)}},checkWrap:{entriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object")return;if(Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).every(i=>{const s=e[i],o=t[i];return s===o}))return e},notEntriesEqual(e,t){if(!e||typeof e!="object"||!t||typeof t!="object"||Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).some(i=>{const s=e[i],o=t[i];return s!==o}))return e}},waitUntil:{entriesEqual:C(fo.entriesEqual),notEntriesEqual:C(fo.notEntriesEqual)}};function Ki(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Br(e,t){if(!(e===t||Ki(e,t))){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)throw new Error("Values are not JSON equal.");if(!Ki(n,r))throw new Error("Values are JSON equal.");Object.keys(e).forEach(s=>{try{Br(e[s],t[s])}catch(o){throw new Error(`JSON objects are not equal at key '${s}': ${ve(o)}`)}})}throw new Error("Values are not JSON equal.")}}function Dr(e,t){if(e===t||Ki(e,t))return!0;if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length!==r.length||!Ki(n,r)?!1:Object.keys(e).every(s=>Dr(e[s],t[s]))}return!1}const ho={jsonEquals(e,t,n){try{Br(e,t)}catch(r){throw new h(ve(r),n)}},notJsonEquals(e,t,n){try{Br(e,t)}catch{return}throw new h("Values are JSON equal.",n)}},Pd={assert:ho,check:{jsonEquals(e,t){return Dr(e,t)},notJsonEquals(e,t){return!Dr(e,t)}},assertWrap:{jsonEquals(e,t,n){try{return Br(e,t),e}catch(r){throw new h(ve(r),n)}},notJsonEquals(e,t,n){try{Br(e,t)}catch{return e}throw new h("Values are JSON equal.",n)}},checkWrap:{jsonEquals(e,t){if(Dr(e,t))return e},notJsonEquals(e,t){if(!Dr(e,t))return e}},waitUntil:{jsonEquals:C(ho.jsonEquals),notJsonEquals:C(ho.notJsonEquals)}};/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */function ul(e){if(typeof e>"u")return"undefined";if(e===null)return"null";const t=e[Symbol.toStringTag];return typeof t=="string"?t:Object.prototype.toString.call(e).slice(8,-1)}function Ld(){this._key="chai/deep-eql__"+Math.random()+Date.now()}Ld.prototype={get:function(t){return t[this._key]},set:function(t,n){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:n,configurable:!0})}};var Id=typeof WeakMap=="function"?WeakMap:Ld;/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function ll(e,t,n){if(!n||Zn(e)||Zn(t))return null;var r=n.get(e);if(r){var i=r.get(t);if(typeof i=="boolean")return i}return null}/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function wi(e,t,n,r){if(!(!n||Zn(e)||Zn(t))){var i=n.get(e);i?i.set(t,r):(i=new Id,i.set(t,r),n.set(e,i))}}function Ve(e,t,n){if(n&&n.comparator)return cl(e,t,n);var r=Rd(e,t);return r!==null?r:cl(e,t,n)}function Rd(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t?!0:Zn(e)||Zn(t)?!1:null}/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function cl(e,t,n){n=n||{},n.memoize=n.memoize===!1?!1:n.memoize||new Id;var r=n&&n.comparator,i=ll(e,t,n.memoize);if(i!==null)return i;var s=ll(t,e,n.memoize);if(s!==null)return s;if(r){var o=r(e,t);if(o===!1||o===!0)return wi(e,t,n.memoize,o),o;var a=Rd(e,t);if(a!==null)return a}var u=ul(e);if(u!==ul(t))return wi(e,t,n.memoize,!1),!1;wi(e,t,n.memoize,!0);var l=Oy(e,t,u,n);return wi(e,t,n.memoize,l),l}function Oy(e,t,n,r){switch(n){case"String":case"Number":case"Boolean":case"Date":return Ve(e.valueOf(),t.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":return e===t;case"Error":return Od(e,t,["name","message","code"],r);case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return wn(e,t,r);case"RegExp":return _y(e,t);case"Generator":return Vy(e,t,r);case"DataView":return wn(new Uint8Array(e.buffer),new Uint8Array(t.buffer),r);case"ArrayBuffer":return wn(new Uint8Array(e),new Uint8Array(t),r);case"Set":return fl(e,t,r);case"Map":return fl(e,t,r);case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.Instant":case"Temporal.ZonedDateTime":case"Temporal.PlainYearMonth":case"Temporal.PlainMonthDay":return e.equals(t);case"Temporal.Duration":return e.total("nanoseconds")===t.total("nanoseconds");case"Temporal.TimeZone":case"Temporal.Calendar":return e.toString()===t.toString();default:return Wy(e,t,r)}}/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */function _y(e,t){return e.toString()===t.toString()}/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function fl(e,t,n){try{if(e.size!==t.size)return!1;if(e.size===0)return!0}catch{return!1}var r=[],i=[];return e.forEach(function(o,a){r.push([o,a])}),t.forEach(function(o,a){i.push([o,a])}),wn(r.sort(),i.sort(),n)}/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function wn(e,t,n){var r=e.length;if(r!==t.length)return!1;if(r===0)return!0;for(var i=-1;++i<r;)if(Ve(e[i],t[i],n)===!1)return!1;return!0}/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Vy(e,t,n){return wn(Ho(e),Ho(t),n)}/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */function Uy(e){return typeof Symbol<"u"&&typeof e=="object"&&typeof Symbol.iterator<"u"&&typeof e[Symbol.iterator]=="function"}/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */function dl(e){if(Uy(e))try{return Ho(e[Symbol.iterator]())}catch{return[]}return[]}/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function Ho(e){for(var t=e.next(),n=[t.value];t.done===!1;)t=e.next(),n.push(t.value);return n}/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function hl(e){var t=[];for(var n in e)t.push(n);return t}function ml(e){for(var t=[],n=Object.getOwnPropertySymbols(e),r=0;r<n.length;r+=1){var i=n[r];Object.getOwnPropertyDescriptor(e,i).enumerable&&t.push(i)}return t}/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Od(e,t,n,r){var i=n.length;if(i===0)return!0;for(var s=0;s<i;s+=1)if(Ve(e[n[s]],t[n[s]],r)===!1)return!1;return!0}/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function Wy(e,t,n){var r=hl(e),i=hl(t),s=ml(e),o=ml(t);if(r=r.concat(s),i=i.concat(o),r.length&&r.length===i.length)return wn(pl(r).sort(),pl(i).sort())===!1?!1:Od(e,t,r,n);var a=dl(e),u=dl(t);return a.length&&a.length===u.length?(a.sort(),u.sort(),wn(a,u,n)):r.length===0&&a.length===0&&i.length===0&&u.length===0}/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */function Zn(e){return e===null||typeof e!="object"}function pl(e){return e.map(function(n){return typeof n=="symbol"?n.toString():n})}const Wt={strictEquals(e,t,n){if(e!==t)throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,n)},looseEquals(e,t,n){if(e!=t)throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,n)},deepEquals(e,t,n){if(!Ve(e,t))throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(Ve(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,n)}},_d=Wt.deepEquals,Vd={assert:Wt,check:{strictEquals(e,t){return e===t},notStrictEquals(e,t){return e!==t},looseEquals(e,t){return e==t},notLooseEquals(e,t){return e!=t},deepEquals(e,t){return Ve(e,t)},notDeepEquals(e,t){return!Ve(e,t)}},assertWrap:{strictEquals(e,t,n){if(e===t)return e;throw new h(`

${m(e)}

does not strictly equal

${m(t)}

`,n)},notStrictEquals(e,t,n){if(e===t)throw new h(`

${m(e)}

strictly equals

${m(t)}

`,n);return e},looseEquals(e,t,n){if(e==t)return e;throw new h(`

${m(e)}

does not loosely equal

${m(t)}

`,n)},notLooseEquals(e,t,n){if(e==t)throw new h(`

${m(e)}

loosely equals

${m(t)}

`,n);return e},deepEquals(e,t,n){if(Ve(e,t))return e;throw new h(`

${m(e)}

does not deeply equal

${m(t)}

`,n)},notDeepEquals(e,t,n){if(Ve(e,t))throw new h(`

${m(e)}

deeply equals

${m(t)}

`,n);return e}},checkWrap:{strictEquals(e,t){if(e===t)return e},notStrictEquals(e,t){if(e!==t)return e},looseEquals(e,t){if(e==t)return e},notLooseEquals(e,t){if(e!==t)return e},deepEquals(e,t){if(Ve(e,t))return e},notDeepEquals(e,t){if(!Ve(e,t))return e}},waitUntil:{strictEquals:C(Wt.strictEquals),notStrictEquals:C(Wt.notStrictEquals),looseEquals:C(Wt.looseEquals),notLooseEquals:C(Wt.notLooseEquals),deepEquals:C(Wt.deepEquals),notDeepEquals:C(Wt.notDeepEquals)}};function _e(e,t){if(typeof e=="string")return typeof t=="string"&&e.includes(t);let n=!0;try{n=Reflect.ownKeys(e).map(r=>e[r]).includes(t)}catch{return!1}return n}function Je(e,t){return typeof t=="string"?t.includes(e):_e(t,e)}const Et={hasValue(e,t,n){if(!_e(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,n)},lacksValue(e,t,n){if(_e(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,n)},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new h(`'${m(e)}' does not have values '${m(r)}'.`,n)},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new h(`'${m(e)}' has values '${m(r)}'.`,n)},isIn(e,t,n){if(!Je(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,n)},isNotIn(e,t,n){if(Je(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,n)},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is not empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is not empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is not empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is not empty.`,t)}}},Ud={assert:Et,check:{hasValue(e,t){return _e(e,t)},lacksValue(e,t){return!_e(e,t)},hasValues(e,t){return t.every(n=>_e(e,n))},lacksValues(e,t){return t.every(n=>!_e(e,n))},isIn(e,t){return Je(e,t)},isNotIn(e,t){return!Je(e,t)},isEmpty(e){return typeof e!="string"&&typeof e!="object"?!1:typeof e=="string"?!e:Array.isArray(e)?!e.length:e instanceof Map||e instanceof Set?!e.size:!Object.keys(e).length},isNotEmpty(e){return typeof e!="string"&&typeof e!="object"?!0:typeof e=="string"?!!e:Array.isArray(e)?!!e.length:e instanceof Map||e instanceof Set?!!e.size:!!Object.keys(e).length}},assertWrap:{hasValue(e,t,n){if(!_e(e,t))throw new h(`'${m(e)}' does not have value '${m(t)}'.`,n);return e},lacksValue(e,t,n){if(_e(e,t))throw new h(`'${m(e)}' has value '${m(t)}'.`,n);return e},hasValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>!(typeof i=="string"&&e.includes(i)));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>!i.includes(s))}catch{throw new h(`'${m(e)}' does not have values '${m(t)}'.`,n)}if(r.length)throw new h(`'${m(e)}' does not have values '${m(r)}'.`,n);return e},lacksValues(e,t,n){let r=[];if(typeof e=="string")r=t.filter(i=>typeof i=="string"&&e.includes(i));else try{const i=Reflect.ownKeys(e).map(s=>e[s]);r=t.filter(s=>i.includes(s))}catch{}if(r.length)throw new h(`'${m(e)}' has values '${m(r)}'.`,n);return e},isIn(e,t,n){if(!Je(e,t))throw new h(`'${m(e)}'

is not in

${m(t)}.`,n);return e},isNotIn(e,t,n){if(Je(e,t))throw new h(`'${m(e)}'

is in

${m(t)}.`,n);return e},isEmpty(e,t){if(typeof e!="string"&&typeof e!="object")throw new h(`'${m(e)}' is not empty.`,t);if(typeof e=="string"&&!e){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e;throw new h(`'${m(e)}' is not empty.`,t)},isNotEmpty(e,t){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"&&!e){if(!e)throw new h(`'${m(e)}' is empty.`,t)}else if(Array.isArray(e)){if(!e.length)throw new h(`'${m(e)}' is empty.`,t)}else if(e instanceof Map||e instanceof Set){if(!e.size)throw new h(`'${m(e)}' is empty.`,t)}else if(typeof e=="object"&&!Object.keys(e).length)throw new h(`'${m(e)}' is empty.`,t);return e}},checkWrap:{hasValue(e,t){if(_e(e,t))return e},lacksValue(e,t){if(!_e(e,t))return e},hasValues(e,t){if(t.every(n=>_e(e,n)))return e},lacksValues(e,t){if(!t.every(n=>_e(e,n)))return e},isIn(e,t){if(Je(e,t))return e},isNotIn(e,t){if(!Je(e,t))return e},isEmpty(e){if(!(typeof e!="string"&&typeof e!="object")){if(typeof e=="string"){if(!e)return e}else if(Array.isArray(e)){if(!e.length)return e}else if(e instanceof Map||e instanceof Set){if(!e.size)return e}else if(typeof e=="object"&&!Object.keys(e).length)return e}},isNotEmpty(e){if(typeof e!="string"&&typeof e!="object")return e;if(typeof e=="string"){if(!e)return}else if(Array.isArray(e)){if(!e.length)return}else if(e instanceof Map||e instanceof Set){if(!e.size)return}else if(typeof e=="object"&&!Object.keys(e).length)return;return e}},waitUntil:{hasValue:C(Et.hasValue),lacksValue:C(Et.lacksValue),hasValues:C(Et.hasValues),lacksValues:C(Et.lacksValues),isIn:C(Et.isIn),isNotIn:C(Et.isNotIn),isEmpty:C(Et.isEmpty),isNotEmpty:C(Et.isNotEmpty)}},mo={isHttpStatus(e,t){if(!vt(e,E))throw new h(`${m(e)} is not a valid HTTP status.`,t)},isHttpStatusCategory(e,t,n){if(vt(e,E)){if(!Je(e,xi[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new h(`${m(e)} is not a valid HTTP status.`,n)}},Wd={assert:mo,check:{isHttpStatus(e){return vt(e,E)},isHttpStatusCategory(e,t){return vt(e,E)&&Je(e,xi[t])}},assertWrap:{isHttpStatus(e,t){if(!vt(e,E))throw new h(`${m(e)} is not a valid HTTP status.`,t);return e},isHttpStatusCategory(e,t,n){if(vt(e,E)){if(!Je(e,xi[t]))throw new h(`${m(e)} is not a '${t}' HTTP status.`,n)}else throw new h(`${m(e)} is not a valid HTTP status.`,n);return e}},checkWrap:{isHttpStatus(e){if(vt(e,E))return e},isHttpStatusCategory(e,t){if(vt(e,E)&&Je(e,xi[t]))return e}},waitUntil:{isHttpStatus:C(mo.isHttpStatus),isHttpStatusCategory:C(mo.isHttpStatusCategory)}},po={instanceOf(e,t,n){if(!(e instanceof t))throw new h(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,n)}},qd={assert:po,check:{instanceOf(e,t){return e instanceof t},notInstanceOf(e,t){return!(e instanceof t)}},assertWrap:{instanceOf(e,t,n){if(e instanceof t)return e;throw new h(`'${m(e)}' is not an instance of '${t.name}'`,n)},notInstanceOf(e,t,n){if(e instanceof t)throw new h(`'${m(e)}' is an instance of '${t.name}'`,n);return e}},checkWrap:{instanceOf(e,t){if(e instanceof t)return e},notInstanceOf(e,t){if(!(e instanceof t))return e}},waitUntil:{instanceOf:C(po.instanceOf),notInstanceOf:C(po.notInstanceOf)}},qy=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function ee(e,t){return qy.some(n=>{try{return n(e,t)}catch{return!1}})}const ln={isKeyOf(e,t,n){if(!ee(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,n)},isNotKeyOf(e,t,n){if(ee(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,n)},hasKey(e,t,n){if(!ee(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,n)},lacksKey(e,t,n){if(ee(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,n)},hasKeys(e,t,n){const r=t.filter(i=>!ee(e,i));if(r.length)throw new h(`'${m(e)}' does not have keys '${r.join(",")}'.`,n)},lacksKeys(e,t,n){const r=t.filter(i=>ee(e,i));if(r.length)throw new h(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n)}},jd={assert:ln,check:{isKeyOf(e,t){return ee(t,e)},isNotKeyOf(e,t){return!ee(t,e)},hasKey:ee,lacksKey(e,t){return!ee(e,t)},hasKeys(e,t){return t.every(n=>ee(e,n))},lacksKeys(e,t){return t.every(n=>!ee(e,n))}},assertWrap:{isKeyOf(e,t,n){if(!ee(t,e))throw new h(`'${String(e)}' is not a key of '${m(t)}'.`,n);return e},isNotKeyOf(e,t,n){if(ee(t,e))throw new h(`'${String(e)}' is a key of '${m(t)}'.`,n);return e},hasKey(e,t,n){if(!ee(e,t))throw new h(`'${m(e)}' does not have key '${String(t)}'.`,n);return e},lacksKey(e,t,n){if(ee(e,t))throw new h(`'${m(e)}' has key '${String(t)}'.`,n);return e},hasKeys(e,t,n){const r=t.filter(i=>!ee(e,i));if(r.length)throw new h(`'${m(e)}' does not have keys '${r.join(",")}'.`,n);return e},lacksKeys(e,t,n){const r=t.filter(i=>ee(e,i));if(r.length)throw new h(`'${m(e)}' does not lack keys '${r.join(",")}'.`,n);return e}},checkWrap:{isKeyOf(e,t){if(ee(t,e))return e},isNotKeyOf(e,t){if(!ee(t,e))return e},hasKey(e,t){if(ee(e,t))return e},lacksKey(e,t){if(!ee(e,t))return e},hasKeys(e,t){if(t.every(n=>ee(e,n)))return e},lacksKeys(e,t){if(t.every(n=>!ee(e,n)))return e}},waitUntil:{isKeyOf:C(ln.isKeyOf),isNotKeyOf:C(ln.isNotKeyOf),hasKey:C(ln.hasKey),lacksKey:C(ln.lacksKey),hasKeys:C(ln.hasKeys),lacksKeys:C(ln.lacksKeys)}};function jy(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,n)}function zy(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,n)}const go={isLengthAtLeast:jy,isLengthExactly:zy},zd={assert:go,check:{isLengthAtLeast:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:J(e).length)>=t,isLengthExactly:(e,t)=>(Array.isArray(e)||typeof e=="string"?e.length:J(e).length)===t},assertWrap:{isLengthAtLeast:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)<t)throw new h(`Length '${e.length}' is not at least '${t}'.`,n);return e},isLengthExactly:(e,t,n)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)!==t)throw new h(`Length '${e.length}' is not exactly '${t}'.`,n);return e}},checkWrap:{isLengthAtLeast:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)>=t)return e},isLengthExactly:(e,t)=>{if((Array.isArray(e)||typeof e=="string"?e.length:J(e).length)===t)return e}},waitUntil:{isLengthAtLeast:C(go.isLengthAtLeast),isLengthExactly:C(go.isLengthExactly)}},yo={isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t)},isNullish(e,t){if(e!=null)throw new h(`'${m(e)}' is not a nullish.`,t)}},Gd={assert:yo,check:{isDefined(e){return e!=null},isNullish(e){return e==null}},assertWrap:{isDefined(e,t){if(e==null)throw new h(`'${m(e)}' is not defined.`,t);return e},isNullish(e,t){if(e==null)return e;throw new h(`'${m(e)}' is not nullish.`,t)}},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:C(yo.isDefined),isNullish:C(yo.isNullish)}},Se={isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new h(`${e} is not within the bounds ${m({min:n,max:t})}`,r)},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new h(`${e} is not outside the bounds ${m({min:t,max:n})}`,r)},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t)},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t)},isAbove(e,t,n){if(e<=t)throw new h(`${e} is not above ${t}`,n)},isAtLeast(e,t,n){if(e<t)throw new h(`${e} is not at least ${t}`,n)},isBelow(e,t,n){if(e>=t)throw new h(`${e} is not below ${t}`,n)},isAtMost(e,t,n){if(e>t)throw new h(`${e} is not at most ${t}`,n)},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t)},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t)},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t)},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new h(`${e} is not within ±${n} of ${t}`,r)},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new h(`${e} is within ±${n} of ${t}`,r)}},Kd={assert:Se,check:{isInBounds(e,{max:t,min:n}){return n<=e&&e<=t},isOutBounds(e,{max:t,min:n}){return e<n||t<e},isInteger(e){return typeof e=="number"&&!isNaN(e)&&Number.isInteger(e)},isNotInteger(e){return typeof e!="number"||isNaN(e)||!Number.isInteger(e)},isAbove(e,t){return e>t},isAtLeast(e,t){return e>=t},isBelow(e,t){return e<t},isAtMost(e,t){return e<=t},isNaN(e){return isNaN(e)},isFinite(e){return!isNaN(e)&&e!==1/0&&e!==-1/0},isInfinite(e){return e===1/0||e===-1/0},isApproximately(e,t,n){return t-n<=e&&e<=t+n},isNotApproximately(e,t,n){return e<t-n||e>t+n}},assertWrap:{isInBounds(e,{max:t,min:n},r){if(e<n||t<e)throw new h(`${e} is not within the bounds ${m({min:n,max:t})}`,r);return e},isOutBounds(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new h(`${e} is not outside the bounds ${m({min:t,max:n})}`,r);return e},isInteger(e,t){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))throw new h(`${e} is not an integer.`,t);return e},isNotInteger(e,t){if(Number.isInteger(e))throw new h(`${e} is an integer.`,t);return e},isAbove(e,t,n){if(e<=t)throw new h(`${e} is not above ${t}`,n);return e},isAtLeast(e,t,n){if(e<t)throw new h(`${e} is not at least ${t}`,n);return e},isBelow(e,t,n){if(e>=t)throw new h(`${e} is not below ${t}`,n);return e},isAtMost(e,t,n){if(e>t)throw new h(`${e} is not at most ${t}`,n);return e},isNaN(e,t){if(!isNaN(e))throw new h(`${e} is not NaN`,t);return e},isFinite(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new h(`${e} is not finite`,t);return e},isInfinite(e,t){if(e!==1/0&&e!==-1/0)throw new h(`${e} is not infinite`,t);return e},isApproximately(e,t,n,r){if(e<t-n||e>t+n)throw new h(`${e} is not within ±${n} of ${t}`,r);return e},isNotApproximately(e,t,n,r){if(e>=t-n&&e<=t+n)throw new h(`${e} is within ±${n} of ${t}`,r);return e}},checkWrap:{isInBounds(e,{max:t,min:n}){if(n<=e&&e<=t)return e},isOutBounds(e,{max:t,min:n}){if(e<n||t<e)return e},isInteger(e){if(typeof e=="number"&&!isNaN(e)&&Number.isInteger(e))return e},isNotInteger(e){if(typeof e!="number"||isNaN(e)||!Number.isInteger(e))return e},isAbove(e,t){if(e>t)return e},isAtLeast(e,t){if(e>=t)return e},isBelow(e,t){if(e<t)return e},isAtMost(e,t){if(e<=t)return e},isNaN(e){if(isNaN(e))return e},isFinite(e){if(!isNaN(e)&&e!==1/0&&e!==-1/0)return e},isInfinite(e){if(e===1/0||e===-1/0)return e},isApproximately(e,t,n){if(t-n<=e&&e<=t+n)return e},isNotApproximately(e,t,n){if(e<t-n||e>t+n)return e}},waitUntil:{isInBounds:C(Se.isInBounds),isOutBounds:C(Se.isOutBounds),isInteger:C(Se.isInteger),isNotInteger:C(Se.isNotInteger),isAbove:C(Se.isAbove),isAtLeast:C(Se.isAtLeast),isBelow:C(Se.isBelow),isAtMost:C(Se.isAtMost),isNaN:C(Se.isNaN),isFinite:C(Se.isFinite),isInfinite:C(Se.isInfinite),isApproximately:C(Se.isApproximately),isNotApproximately:C(Se.isNotApproximately)}};function Gy(e,t,n,r,i){return ti(...gs(e,t,n,r,i),!1)}function gs(e,t,n,r,i){const s=Array.isArray(n);return[s?e:_d,s?t:e,s?n:t,s?r:n,s?i:r]}function ti(e,t,n,r,i,s){const o=t(...n);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,r),s?a(l):a()}catch(l){u(new h(`Output from '${t.name}' did not produce expected output with input: ${m(n)}: ${ve(l)}`,i))}});try{return e(o,r),s?o:void 0}catch(a){throw new h(`Output from '${t.name}' did not produce expected output with input: ${m(n)}: ${ve(a)}`,i)}}function Ky(e,t,n,r,i){try{const s=ti(...gs(e,t,n,r,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function Zy(e,t,n,r,i){return ti(...gs(e,t,n,r,i),!0)}function Yy(e,t,n,r,i){try{const s=ti(...gs(e,t,n,r,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const wo=Symbol("not set");async function Jy(e,t,n,r,i,s){const o=Array.isArray(n),a=o?e:_d,u=o?t:e,l=o?n:t,f=o?r:n,c=Td(o?i:r),d=o?s:i,p=lt(c.timeout,{milliseconds:!0}).milliseconds,b=lt(c.interval,{milliseconds:!0});let D=wo,$;async function A(){try{D=await ti(a,u,l,f,void 0,!0)}catch(I){D=wo,$=Be(I)}}const F=Date.now();for(;D===wo;)if(await A(),await xr(b),Date.now()-F>=p)throw Jr($,Yr(d,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return D}const Hy={output:Gy},Zd={assert:Hy,check:{output:Ky},assertWrap:{output:Zy},checkWrap:{output:Yy},waitUntil:{output:Jy}},pr={isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t)},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t)},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t)},isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t)}},Yd={assert:pr,check:{isNotPrimitive(e){return e!==null&&(typeof e=="object"||typeof e=="function")},isNotPropertyKey(e){return typeof e!="string"&&typeof e!="number"&&typeof e!="symbol"},isPrimitive(e){return e===null||typeof e!="object"&&typeof e!="function"},isPropertyKey(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"}},assertWrap:{isNotPrimitive(e,t){if(e===null||typeof e!="object"&&typeof e!="function")throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isNotPropertyKey(e,t){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")throw new h(`'${m(e)}' is a PropertyKey.`,t);return e},isPrimitive(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new h(`'${m(e)}' is not a Primitive.`,t);return e},isPropertyKey(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new h(`'${m(e)}' is not a PropertyKey.`,t);return e}},checkWrap:{isNotPrimitive(e){if(e!==null&&(typeof e=="object"||typeof e=="function"))return e},isNotPropertyKey(e){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")return e},isPrimitive(e){if(e===null||typeof e!="object"&&typeof e!="function")return e},isPropertyKey(e){if(typeof e=="string"||typeof e=="number"||typeof e=="symbol")return e}},waitUntil:{isNotPrimitive:C(pr.isNotPrimitive),isNotPropertyKey:C(pr.isNotPropertyKey),isPrimitive:C(pr.isPrimitive),isPropertyKey:C(pr.isPropertyKey)}},gr={isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t)},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t)},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t)},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t)}},Jd={assert:gr,check:{isPromiseLike(e){return!!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isNotPromiseLike(e){return!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")},isPromise(e){return e instanceof Promise},isNotPromise(e){return!(e instanceof Promise)}},assertWrap:{isPromiseLike(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new h(`'${m(e)}' is not a PromiseLike.`,t);return e},isNotPromiseLike(e,t){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")throw new h(`'${m(e)}' is a PromiseLike.`,t);return e},isPromise(e,t){if(!(e instanceof Promise))throw new h(`'${m(e)}' is not a Promise.`,t);return e},isNotPromise(e,t){if(e instanceof Promise)throw new h(`'${m(e)}' is a Promise.`,t);return e}},checkWrap:{isPromiseLike(e){if(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function")return e},isNotPromiseLike(e){if(!(e instanceof Promise||e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))return e},isPromise(e){if(e instanceof Promise)return e},isNotPromise(e){if(!(e instanceof Promise))return e}},waitUntil:{isPromiseLike:C(gr.isPromiseLike,!0),isNotPromiseLike:C(gr.isNotPromiseLike,!0),isPromise:C(gr.isPromise,!0),isNotPromise:C(gr.isNotPromise,!0)}},bo={matches(e,t,n){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,n)},mismatches(e,t,n){if(t.test(e))throw new h(`'${e}' matches ${t}`,n)}},Hd={assert:bo,check:{matches(e,t){return!!t.test(e)},mismatches(e,t){return!t.test(e)}},assertWrap:{matches(e,t,n){if(!t.test(e))throw new h(`'${e}' does not match ${t}`,n);return e},mismatches(e,t,n){if(t.test(e))throw new h(`'${e}' matches ${t}`,n);return e}},checkWrap:{matches(e,t){if(t.test(e))return e},mismatches(e,t){if(!t.test(e))return e}},waitUntil:{matches:C(bo.matches,!0),mismatches:C(bo.mismatches,!0)}},ae={isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t)},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t)},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t)},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t)},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t)},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t)},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t)},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t)},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t)},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t)},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t)},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t)},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t)},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t)},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t)},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t)},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t)},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t)},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t)},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t)}},Qd={assert:ae,check:{isArray(e){return Array.isArray(e)},isBigInt(e){return typeof e=="bigint"},isBoolean(e){return typeof e=="boolean"},isFunction(e){return typeof e=="function"},isNull(e){return e===null},isNumber(e){return typeof e=="number"},isObject(e){return!Array.isArray(e)&&typeof e=="object"&&!!e},isString(e){return typeof e=="string"},isSymbol(e){return typeof e=="symbol"},isUndefined(e){return e===void 0},isNotArray(e){return!Array.isArray(e)},isNotBigInt(e){return typeof e!="bigint"},isNotBoolean(e){return typeof e!="boolean"},isNotFunction(e){return typeof e!="function"},isNotNull(e){return e!==null},isNotNumber(e){return typeof e!="number"},isNotObject(e){return Array.isArray(e)||typeof e!="object"||!e},isNotString(e){return typeof e!="string"},isNotSymbol(e){return typeof e!="symbol"},isNotUndefined(e){return typeof e<"u"}},assertWrap:{isArray(e,t){if(!Array.isArray(e))throw new h(`'${m(e)}' is not an array.`,t);return e},isBigInt(e,t){if(typeof e!="bigint")throw new h(`'${m(e)}' is not a bigint.`,t);return e},isBoolean(e,t){if(typeof e!="boolean")throw new h(`'${m(e)}' is not a boolean.`,t);return e},isFunction(e,t){if(typeof e!="function")throw new h(`'${m(e)}' is not a function.`,t);return e},isNull(e,t){if(e!==null)throw new h(`'${m(e)}' is not nul.`,t);return e},isNumber(e,t){if(typeof e!="number"||isNaN(e))throw new h(`'${m(e)}' is not a number.`,t);return e},isObject(e,t){if(Array.isArray(e)||typeof e!="object"||!e)throw new h(`'${m(e)}' is not a non-null object.`,t);return e},isString(e,t){if(typeof e!="string")throw new h(`'${m(e)}' is not a string.`,t);return e},isSymbol(e,t){if(typeof e!="symbol")throw new h(`'${m(e)}' is not a symbol.`,t);return e},isUndefined(e,t){if(typeof e<"u")throw new h(`'${m(e)}' is not a undefined.`,t);return e},isNotArray(e,t){if(Array.isArray(e))throw new h(`'${m(e)}' is an array.`,t);return e},isNotBigInt(e,t){if(typeof e=="bigint")throw new h(`'${m(e)}' is a bigint.`,t);return e},isNotBoolean(e,t){if(typeof e=="boolean")throw new h(`'${m(e)}' is a boolean.`,t);return e},isNotFunction(e,t){if(typeof e=="function")throw new h(`'${m(e)}' is a function.`,t);return e},isNotNull(e,t){if(e===null)throw new h(`'${m(e)}' is a null.`,t);return e},isNotNumber(e,t){if(typeof e=="number")throw new h(`'${m(e)}' is a number.`,t);return e},isNotObject(e,t){if(!Array.isArray(e)&&typeof e=="object"&&e)throw new h(`'${m(e)}' is a non-null object.`,t);return e},isNotString(e,t){if(typeof e=="string")throw new h(`'${m(e)}' is a string.`,t);return e},isNotSymbol(e,t){if(typeof e=="symbol")throw new h(`'${m(e)}' is a symbol.`,t);return e},isNotUndefined(e,t){if(typeof e>"u")throw new h(`'${m(e)}' is a undefined.`,t);return e}},checkWrap:{isArray(e){if(Array.isArray(e))return e},isBigInt(e){if(typeof e=="bigint")return e},isBoolean(e){if(typeof e=="boolean")return e},isFunction(e){if(typeof e=="function")return e},isNull(e){if(e===null)return e},isNumber(e){if(typeof e=="number")return e},isObject(e){if(!Array.isArray(e)&&typeof e=="object"&&e)return e},isString(e){if(typeof e=="string")return e},isSymbol(e){if(typeof e=="symbol")return e},isNotArray(e){if(!Array.isArray(e))return e},isNotBigInt(e){if(typeof e!="bigint")return e},isNotBoolean(e){if(typeof e!="boolean")return e},isNotFunction(e){if(typeof e!="function")return e},isNotNull(e){if(e!==null)return e},isNotNumber(e){if(typeof e!="number")return e},isNotObject(e){if(Array.isArray(e)||typeof e!="object"||!e)return e},isNotString(e){if(typeof e!="string")return e},isNotSymbol(e){if(typeof e!="symbol")return e}},waitUntil:{isArray:C(ae.isArray),isBigInt:C(ae.isBigInt),isBoolean:C(ae.isBoolean),isFunction:C(ae.isFunction),isNull:C(ae.isNull),isNumber:C(ae.isNumber),isObject:C(ae.isObject),isString:C(ae.isString),isSymbol:C(ae.isSymbol),isUndefined:C(ae.isUndefined),isNotArray:C(ae.isNotArray),isNotBigInt:C(ae.isNotBigInt),isNotBoolean:C(ae.isNotBoolean),isNotFunction:C(ae.isNotFunction),isNotNull:C(ae.isNotNull),isNotNumber:C(ae.isNotNumber),isNotObject:C(ae.isNotObject),isNotString:C(ae.isNotString),isNotSymbol:C(ae.isNotSymbol),isNotUndefined:C(ae.isNotUndefined)}};var Me;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Me||(Me={}));function Pa(e,t,n){La(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n)}function gl(e,t,n){La(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${m(e)}' is not an error instance.`},t,n)}function La(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new h(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=ve(e);if(typeof n.matchMessage=="string"){if(!i.includes(n.matchMessage))throw new h(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new h(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new h(t.notInstance,r);else throw new h(t.noError,r)}function yl(e,t){if(e)if(e instanceof Error){if(t?.matchConstructor&&!(e instanceof t.matchConstructor))return!1;if(t?.matchMessage){const n=ve(e);if(typeof t.matchMessage=="string"){if(!n.includes(t.matchMessage))return!1}else if(!n.match(t.matchMessage))return!1}}else return!1;else return!1;return!0}function ys(e,t,n,r){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=Be(u)}try{gl(i,n,r),e===Me.Assert?o():e===Me.Check?o(!0):o(i)}catch(u){e===Me.CheckWrap?o(void 0):e===Me.Check?o(!1):a(Be(u))}})}catch(s){i=Be(s)}try{return gl(i,n,r),e===Me.Check?!0:e!==Me.Assert?i:void 0}catch(s){if(e===Me.CheckWrap)return;if(e===Me.Check)return!1;throw s}}function Qy(e,t,n){return ys(Me.Assert,e,t,n)}function Xy(e,t){return ys(Me.Check,e,t)}function ew(e,t,n){return ys(Me.AssertWrap,e,t,n)}function tw(e,t,n){return ys(Me.CheckWrap,e,t,n)}const nw=C(Pa);function rw(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${m(s)}'`);return nw(i,async()=>{try{await s();return}catch(u){return Be(u)}},a,o)}const iw={throws:Qy,isError:Pa},Xd={assert:iw,check:{throws:Xy,isError(e,t){return yl(e,t)}},assertWrap:{throws:ew,isError(e,t,n){return La(e,{noError:"No error.",notInstance:`'${m(e)}' is not an error instance.`},t,n),e}},checkWrap:{throws:tw,isError(e,t){if(yl(e,t))return e}},waitUntil:{throws:rw,isError:C(Pa)}},jt=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Eo={isUuid(e,t){if(!String(e).match(jt))throw new h(`'${String(e)}' is not a UUID.`,t)},isNotUuid(e,t){if(String(e).match(jt))throw new h(`'${String(e)}' is a UUID.`,t)}},eh={assert:Eo,check:{isUuid(e){return!!String(e).match(jt)},isNotUuid(e){return!String(e).match(jt)}},assertWrap:{isUuid(e,t){if(!String(e).match(jt))throw new h(`'${String(e)}' is not a UUID.`,t);return e},isNotUuid(e,t){if(String(e).match(jt))throw new h(`'${String(e)}' is a UUID.`,t);return e}},checkWrap:{isUuid(e){if(String(e).match(jt))return e},isNotUuid(e){if(!String(e).match(jt))return e}},waitUntil:{isUuid:C(Eo.isUuid),isNotUuid:C(Eo.isNotUuid)}},sw={...Md.assert,...Nd.assert,...Bd.assert,...xd.assert,...qd.assert,...Pd.assert,...jd.assert,...zd.assert,...Gd.assert,...Kd.assert,...Yd.assert,...Jd.assert,...Hd.assert,...Qd.assert,...Vd.assert,...Xd.assert,...eh.assert,...Ud.assert,...Wd.assert,...Zd.assert},ws=[Md,Nd,Bd,xd,qd,Pd,jd,zd,Gd,Kd,Yd,Jd,Hd,Qd,Vd,Xd,eh,Ud,Wd,Zd],ow=Object.assign({},...ws.map(e=>e.check)),w=Object.assign(function(t){return!!t},ow);function aw(e,t,n){return Ri(e,t,n,new Set)}function Ri(e,t,n,r){if(e=wl(e),t=wl(t),w.isObject(e)&&w.isObject(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),!Ri(J(e).sort(),J(t).sort(),n,r))return!1;let i=!1;const s=J(e).map(o=>{const a=Ri(e[o],t[o],n,r);return w.isPromise(a)&&(i=!0),a});return bl(i,s)}else if(w.isArray(e)&&w.isArray(t)){if(r.has(e)||r.has(t))return!0;if(r.add(e),r.add(t),e.length!==t.length)return!1;let i=!1;const s=e.map((o,a)=>{const u=Ri(o,t[a],n,r);return w.isPromise(u)&&(i=!0),u});return bl(i,s)}else return n(e,t)}function wl(e){return e instanceof Set?Array.from(e.entries()).sort():e instanceof Map?Object.fromEntries(e.entries()):e instanceof RegExp?e.source:e}function bl(e,t){return e?new Promise(async(n,r)=>{try{const i=await Promise.all(t);n(i.every(w.isTrue))}catch(i){r(Be(i))}}):t.every(w.isTrue)}const uw=Object.assign({},...ws.map(e=>e.assertWrap));Object.assign(function(t,n){if(!t)throw new h("Assertion failed.",n);return t},uw);function lw(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const cw={tsType:lw},fw={assert:cw},dw={fail:e=>{throw new h("Failure triggered.",e)}},hw={...fw.assert,...sw,...dw},ar=Object.assign(function(t,n){if(!t)throw new h("Assertion failed.",n)},hw),mw=Object.assign({},...ws.map(e=>e.checkWrap));Object.assign(function(t){if(t)return t},mw);const pw=Object.assign({},...ws.map(e=>e.waitUntil));Object.assign(function(t,n){return Fd((r,i)=>{if(!r)throw new h("Assertion failed.",i)},[t,n],!1)},pw);function gw(e,t){return w.hasKey(e,"entryType")&&e.entryType===t}function kn(e,t){return e.controlType===t}var Y=(e=>(e.Checkbox="checkbox",e.Color="color",e.Dropdown="dropdown",e.Hidden="hidden",e.Number="number",e.Text="text",e))(Y||{});const th=Symbol("any-type"),yw={checkbox:!1,color:"",dropdown:"",hidden:th,number:0,text:""};function ww(e,t){if(!e)return[];const n=[];return Object.entries(e).forEach(([r,i])=>{const s=yw[i.controlType];s!==th&&(typeof s!=typeof i.initValue&&n.push(new Error(`Control '${r}' in page '${t}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),r||n.push(new Error(`'${t}' cannot have an empty control name.`)))}),n}function bw(e,t,n){const r=t;if(e.has(r))return e.get(r);{const i=n();return w.isPromise(i)?new Promise(async(s,o)=>{try{const a=await i;e.set(r,a),s(a)}catch(a){o(Be(a))}}):(e.set(r,i),i)}}function nh(e,t,n){if(t in e)return e[t];{const r=n();return w.isPromise(r)?new Promise(async(i,s)=>{try{const o=await r;e[t]=o,i(o)}catch(o){s(Be(o))}}):(e[t]=r,r)}}function Ia(e){return J(e).map(t=>[t,e[t]])}function Qo(e){return Object.fromEntries(e)}function bs(e,t,n){return e.reduce((r,i,s,o)=>{const a=t(i,s,o);return n(a,i,s,o)&&r.push(a),r},[])}function Ew({min:e,max:t}){const{min:n,max:r}=vf({min:Math.floor(e),max:Math.floor(t)}),i=r-n+1,s=Math.ceil(Math.log2(i)),o=Math.ceil(s/8);if(o>65e3)throw new RangeError(`Cannot create a random integer so large. ({min: ${n}, max: ${r}})`);const a=Math.floor(256**o/i)*i,u=new Uint8Array(o);let l;do crypto.getRandomValues(u),l=u.reduce((f,c,d)=>f+c*256**d,0);while(l>=a);return n+l%i}const El=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];function rh(e=16){let t="";for(let n=0;n<e;n++){const r=Ew({min:0,max:El.length-1});t+=El[r]}return t}function ih(e){if(w.isLengthAtLeast(e,1)){if(e.length===1)return e[0]}else return new Error;return new Error(e.map(t=>ve(t).trim()).join(`
`))}var Dl;(function(e){e.FirstThenWait="first-then-wait",e.AfterWait="after-wait"})(Dl||(Dl={}));function sh(e){try{return JSON.parse(JSON.stringify(e))}catch(t){throw console.error("Failed to JSON copy for",e),t}}const Dw="modulepreload",vw=function(e){return"/element-vir/vira/"+e},vl={},oh=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");i=Promise.allSettled(n.map(u=>{if(u=vw(u),u in vl)return;vl[u]=!0;const l=u.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":Dw,l||(c.as="script"),c.crossOrigin="",c.href=u,a&&c.setAttribute("nonce",a),document.head.appendChild(c),l)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var he;(function(e){e.Standard="stdout",e.Error="stderr"})(he||(he={}));var j;(function(e){e.Bold="bold",e.Debug="debug",e.Error="error",e.Faint="faint",e.Info="info",e.Mutate="mutate",e.NormalWeight="normalWeight",e.Plain="plain",e.Reset="reset",e.Success="success",e.Warning="warning"})(j||(j={}));async function Aw(){return await Sd({async[Mt.Node](){const e=(await oh(async()=>{const{default:t}=await import("./index-BkK8QNWG.js");return{default:t}},[])).default;return{[j.Bold]:e.bold.open,[j.Debug]:e.blueBright.open,[j.Error]:e.red.open,[j.Faint]:e.gray.open,[j.Info]:e.cyan.open,[j.Mutate]:e.magenta.open,[j.NormalWeight]:"\x1B[22m",[j.Plain]:"",[j.Reset]:e.reset.open,[j.Success]:e.green.open,[j.Warning]:e.yellow.open}},[Mt.Web](){return Promise.resolve({[j.Bold]:"font-weight: bold",[j.Debug]:"color: blue",[j.Error]:"color: red",[j.Faint]:"color: grey",[j.Info]:"color: teal",[j.Mutate]:"color: magenta",[j.NormalWeight]:"",[j.Plain]:"",[j.Reset]:"",[j.Success]:"color: green",[j.Warning]:"color: orange"})}})}const Oe=await Aw(),$w={[j.Bold]:{colors:[Oe.bold],logType:he.Standard},[j.Debug]:{colors:[Oe.debug],logType:he.Standard},[j.Faint]:{colors:[Oe.faint],logType:he.Standard},[j.Info]:{colors:[Oe.info],logType:he.Standard},[j.Mutate]:{colors:[Oe.mutate,Oe.bold],logType:he.Standard},[j.NormalWeight]:{colors:[Oe.normalWeight],logType:he.Standard},[j.Plain]:{colors:[],logType:he.Standard},[j.Reset]:{colors:[Oe.reset],logType:he.Standard},[j.Success]:{colors:[Oe.success,Oe.bold],logType:he.Standard},[j.Error]:{colors:[Oe.error,Oe.bold],logType:he.Error},[j.Warning]:{colors:[Oe.warning],logType:he.Error}};function Cw(e){return e.replace(/,/g,"")}function kw(e){return typeof e=="number"?e:Number(typeof e=="string"?Cw(e):e)}function Al(e){const t=Sw(e);if(t==null)throw new TypeError(`Cannot convert to a number: ${String(e)}`);return t}function Sw(e){const t=kw(e);if(!isNaN(t))return t}const Fw="px";function ah(e){return Tw({value:e,suffix:Fw})}function Tw({value:e,suffix:t}){return String(e).endsWith(t)?String(e):`${String(e)}${t}`}function Mw({value:e,suffix:t}){return e.endsWith(t)?e.slice(0,Math.max(0,e.length-t.length)):e}async function Nw(){return await Sd({async[Mt.Node](){const{inspect:e}=await oh(async()=>{const{inspect:t}=await import("node:util");return{inspect:t}},[]);return({args:t,colorKey:n,options:r})=>{const i=t.map(a=>typeof a=="string"?a:e(a));return{text:[r.omitColors?"":r.colorConfig[n].colors.join(""),i.join(`
`),r.omitColors?"":r.colorConfig[j.Reset].colors.join("")].join(""),css:void 0}}},[Mt.Web](){return({args:e,colorKey:t,options:n})=>{const r=n.omitColors?void 0:bs(n.colorConfig[t].colors,o=>Mw({value:o,suffix:";"}),w.isTruthy).join("; ");return{text:[e.map(o=>typeof o=="string"?o:m(o)).join(`
`),n.omitColors?"":n.colorConfig[j.Reset].colors.join("")].join(""),css:r}}}})}const xw=await Nw();function je({value:e,prefix:t}){return String(e).startsWith(t)?String(e):`${t}${String(e)}`}function jn({value:e,prefix:t}){return e.startsWith(t)?e.slice(t.length):e}function Bw(e,t){try{let n=!1;const r=Ia(e).map(([i,s])=>{const o=t(i,s,e);return o instanceof Promise?(n=!0,o):o?[o.key,o.value]:void 0}).filter(w.isTruthy);return n?new Promise(async(i,s)=>{try{const o=bs(await Promise.all(r),a=>{if(a)return Array.isArray(a)?a:[a.key,a.value]},w.isTruthy);i(Qo(o))}catch(o){s(Be(o))}}):Qo(r)}catch(n){throw Be(n)}}function Pw(e,t){return Bw(e,(n,r)=>{const i=r,s=t(r,e);return s instanceof Promise?s.then(o=>({key:i,value:o})):{key:i,value:s}})}function uh(e,...t){const n={...e};return t.forEach(r=>{r&&Ia(r).forEach(([i,s])=>{s!=null&&(n[i]=s)})}),n}const Lw={colorConfig:$w,omitColors:!1},Iw=lh({[he.Error](){},[he.Standard](){}});function lh(e,t){const n=uh(Lw,t);function r(s){e[n.colorConfig[s.colorKey].logType](xw({...s,options:n}))}const i=Pw(j,s=>(...o)=>r({args:o,colorKey:s}));return{...i,if(s){return s?i:Iw}}}const Rw=Ny(Mt.Node)?{[he.Error]({text:e}){process.stderr.write(e+`
`)},[he.Standard]({text:e}){process.stdout.write(e+`
`)}}:{[he.Error]({text:e,css:t}){console.error(je({value:e,prefix:"%c"}),t)},[he.Standard]({text:e,css:t}){console.log(je({value:e,prefix:"%c"}),t)}};lh(Rw);function Ow(e,t){return e.split(t)}function Do(e,t){const{min:n,max:r}=vf(t);return e>r?n:e<n?r:e}function pe(e,t){let n=!1;const r=J(e).reduce((i,s)=>{const o=t(s,e[s],e);return o instanceof Promise&&(n=!0),i[s]=o,i},{});return n?new Promise(async(i,s)=>{try{await Promise.all(J(r).map(async o=>{const a=await r[o];r[o]=a})),i(r)}catch(o){s(Be(o))}}):r}function Ra(e,t){const n=Ia(e).filter(([r,i])=>t(r,i,e));return Qo(n)}function _w(e,t){return Ra(e,n=>!t.includes(n))}function Vw(e,t){return Ra(e,n=>t.includes(n))}function ch(e){return J(e).map(t=>e[t])}function Uw(e,t){return t.capitalizeFirstLetter?Ww(e):e}function Ww(e){return e.length?e[0].toUpperCase()+e.slice(1):""}const qw={capitalizeFirstLetter:!1};var Yn;(function(e){e.Upper="upper",e.Lower="lower"})(Yn||(Yn={}));function jw(e){return e.toLowerCase()!==e.toUpperCase()}function $l(e,t,n){if(!e&&n?.rejectNoCaseCharacters)return!1;for(const r of e)if(jw(r)){if(t===Yn.Upper&&r!==r.toUpperCase()||t===Yn.Lower&&r!==r.toLowerCase())return!1}else{if(n?.rejectNoCaseCharacters)return!1;continue}return!0}function zw(e,t={}){const n=e.toLowerCase();if(!n.length)return"";const r=n.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return Uw(r,uh(qw,t))}function Gw(e){return e.split("").reduce((n,r,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",u=$l(o,Yn.Lower,{rejectNoCaseCharacters:!0})||$l(a,Yn.Lower,{rejectNoCaseCharacters:!0});return r===r.toLowerCase()||i===0||!u?n+=r:n+=`-${r.toLowerCase()}`,n},"").toLowerCase()}function Kw(e,t="and"){if(e.length<2)return e.join("");const n=e.length>2?", ":" ";return`${e.slice(0,-1).join(n)}${n}${t} ${e[e.length-1]}`}function Zw(e,{keepNewLines:t}={}){return t?e.trim().replaceAll(/[^\S\r\n]+/g," ").replaceAll(/[^\S\r\n]?\n+[^\S\r\n]?/g,`
`):e.trim().replaceAll(/\s+/g," ")}function fh(){function e(t){return class extends CustomEvent{static type=t;constructor(r){super(t,r)}}}return e}function dh(e){return class extends Event{static type=e;constructor(n){super(e,n)}}}function Es(e){let t;try{t=Reflect.ownKeys(e)}catch{}return t??[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Yw(e){return Es(e).filter(t=>isNaN(Number(t)))}function hh(e){return Yw(e).map(n=>e[n])}function P(e){try{return Df.stringify(e)}catch{return String(e)}}const Jw=[".",":",";",",","?","!"],Hw=new RegExp(`[${Jw.join("")}]+$`);function Cl(e){return e.replace(Hw,"")}function Jn(e){return e?e instanceof Error?e.message:typeof e=="object"&&"message"in e?String(e.message):typeof e=="string"?e:P(e):""}function Oa(...e){const t=(Array.isArray(e[0])?e[0]:e).filter(r=>r&&Cl(r));return t.length===1?t[0]:t.length?t.map((r,i)=>i===t.length-1?r:Cl(r)).join(": "):""}function Ft(e){return e instanceof Error?e:new Error(Jn(e))}function mh(e,t){const n=Ft(e);return n.message=Oa(t,n.message),n}var x;(function(e){e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableContent=422]="UnprocessableContent",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired"})(x||(x={}));var dn;(function(e){e.Information="information",e.Success="success",e.Redirect="redirect",e.ClientError="clientError",e.ServerError="serverError"})(dn||(dn={}));const Qw={[dn.Information]:[x.Continue,x.SwitchingProtocols,x.Processing,x.EarlyHints],[dn.Success]:[x.Ok,x.Created,x.Accepted,x.NonAuthoritativeInformation,x.NoContent,x.ResetContent,x.PartialContent,x.MultiStatus,x.AlreadyReported,x.ImUsed],[dn.Redirect]:[x.MultipleChoices,x.MovedPermanently,x.Found,x.SeeOther,x.NotModified,x.UseProxy,x.Unused,x.TemporaryRedirect,x.PermanentRedirect],[dn.ClientError]:[x.BadRequest,x.Unauthorized,x.PaymentRequired,x.Forbidden,x.NotFound,x.MethodNotAllowed,x.NotAcceptable,x.ProxyAuthenticationRequired,x.RequestTimeout,x.Conflict,x.Gone,x.LengthRequired,x.PreconditionFailed,x.PayloadTooLarge,x.UriTooLong,x.UnsupportedMediaType,x.RangeNotSatisfiable,x.ExpectationFailed,x.ImATeapot,x.MisdirectedRequest,x.UnprocessableContent,x.Locked,x.FailedDependency,x.TooEarly,x.UpgradeRequired,x.PreconditionRequired,x.TooManyRequests,x.RequestHeaderFieldsTooLarge,x.UnavailableForLegalReasons],[dn.ServerError]:[x.InternalServerError,x.NotImplemented,x.BadGateway,x.ServiceUnavailable,x.GatewayTimeout,x.HttpVersionNotSupported,x.VariantAlsoNegotiates,x.InsufficientStorage,x.LoopDetected,x.NotExtended,x.NetworkAuthenticationRequired]};class Xw{promise;resolve;reject;isSettled=!1;constructor(){this.promise=new Promise((t,n)=>{this.resolve=r=>(this.isSettled=!0,t(r)),this.reject=r=>{this.isSettled=!0,n(Ft(r))}})}}function ph(e){const t=new Xw,n=lt(e,{milliseconds:!0}).milliseconds;return n!==1/0&&setTimeout(()=>{t.resolve()},n<=0?0:n),t.promise}var Zi;(function(e){e.Node="node",e.Web="web"})(Zi||(Zi={}));function e1(){return Cd?Zi.Node:Zi.Web}e1();class k extends Error{name="AssertionError";constructor(t,n){super(Oa(n,t)||"Assertion failed.")}}const y=Symbol("auto guard");function g(){return y}function Ds(e,t,n){return t in e&&e[t]!==y?e[t]:n()}function t1(e,t){yt(e,"array",t)}function n1(e,t){yt(e,"bigint",t)}function r1(e,t){yt(e,"boolean",t)}function i1(e,t){yt(e,"function",t)}function s1(e,t){yt(e,"number",t)}function o1(e,t){yt(e,"object",t)}function a1(e,t){yt(e,"string",t)}function u1(e,t){yt(e,"symbol",t)}function l1(e,t){yt(e,"undefined",t)}function c1(e,t){yt(e,"null",t)}function f1(e,t){gt(e,"array",t)}function d1(e,t){gt(e,"bigint",t)}function h1(e,t){gt(e,"boolean",t)}function m1(e,t){gt(e,"function",t)}function gh(e,t){if(gt(e,"number",t),isNaN(e))throw new k("Value is NaN.",t)}function p1(e,t){gt(e,"object",t)}function g1(e,t){gt(e,"string",t)}function y1(e,t){gt(e,"symbol",t)}function w1(e,t){gt(e,"undefined",t)}function b1(e,t){gt(e,"null",t)}const E1={isArray:f1,isBigInt:d1,isBoolean:h1,isFunction:m1,isNull:b1,isNumber:gh,isObject:p1,isString:g1,isSymbol:y1,isUndefined:w1,isNotArray:t1,isNotBigInt:n1,isNotBoolean:r1,isNotFunction:i1,isNotNull:c1,isNotNumber:s1,isNotObject:o1,isNotString:a1,isNotSymbol:u1,isNotUndefined:l1},yh={assert:E1,check:{isArray:g(),isBigInt:y,isBoolean:y,isFunction:g(),isNull:y,isNumber:y,isObject:y,isString:y,isSymbol:y,isUndefined:y,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()},assertWrap:{isArray:g(),isBigInt:y,isBoolean:y,isFunction:g(),isNull:y,isNumber:y,isObject:y,isString:y,isSymbol:g(),isUndefined:y,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()},checkWrap:{isArray:g(),isBigInt:y,isBoolean:y,isFunction:g(),isNull:y,isNumber:y,isObject:y,isString:y,isSymbol:y,isUndefined:void 0,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:void 0},waitUntil:{isArray:g(),isBigInt:y,isBoolean:y,isFunction:g(),isNull:y,isNumber:y,isObject:y,isString:y,isSymbol:y,isUndefined:y,isNotArray:g(),isNotBigInt:g(),isNotBoolean:g(),isNotFunction:g(),isNotNull:g(),isNotNumber:g(),isNotObject:g(),isNotString:g(),isNotSymbol:g(),isNotUndefined:g()}};var Yi;(function(e){e.String="string",e.Number="number",e.Bigint="bigint",e.Boolean="boolean",e.Symbol="symbol",e.Undefined="undefined",e.Object="object",e.Function="function",e.Array="array",e.Null="null"})(Yi||(Yi={}));function wh(e){return e===null?Yi.Null:Array.isArray(e)?Yi.Array:typeof e}function gt(e,t,n){const r=wh(e);if(r!==t)throw new k(`'${P(e)}' is '${r}', not '${t}'.`,n)}function yt(e,t,n){const r=wh(e);if(r===t)throw new k(`'${P(e)}' is '${r}'.`,n)}function D1(e,t){if(e)throw new k(`'${P(e)}' is not truthy.`,t)}function v1(e,t){if(!e)throw new k(`'${P(e)}' is not truthy.`,t)}function A1(e,t){if(e!==!0)throw new k(`'${P(e)}' is not true.`,t)}function $1(e,t){if(e!==!1)throw new k(`'${P(e)}' is not false.`,t)}const C1={isFalse:$1,isFalsy:D1,isTrue:A1,isTruthy:v1},bh={assert:C1,check:{isFalse:y,isFalsy:y,isTrue:y,isTruthy:g()},assertWrap:{isFalse:y,isFalsy:g(),isTrue:y,isTruthy:g()},checkWrap:{isFalse:y,isFalsy:g(),isTrue:y,isTruthy:g()},waitUntil:{isFalse:y,isFalsy:g(),isTrue:y,isTruthy:g()}};function k1(e,t,n){const r=`${P(e)} does not end with ${P(t)}}`;if(typeof e=="string"){if(!e.endsWith(t))throw new k(r,n)}else if(e[e.length-1]!==t)throw new k(r,n)}function S1(e,t,n){const r=`${P(e)} ends with ${P(t)}}`;if(typeof e=="string"){if(e.endsWith(t))throw new k(r,n)}else if(e[e.length-1]===t)throw new k(r,n)}function F1(e,t,n){const r=`${P(e)} does not start with ${P(t)}}`;if(typeof e=="string"){if(!e.startsWith(t))throw new k(r,n)}else if(e[0]!==t)throw new k(r,n)}function T1(e,t,n){const r=`${P(e)} starts with ${P(t)}}`;if(typeof e=="string"){if(e.startsWith(t))throw new k(r,n)}else if(e[0]===t)throw new k(r,n)}const M1={endsWith:k1,endsWithout:S1,startsWith:F1,startsWithout:T1},Eh={assert:M1,check:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},assertWrap:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},checkWrap:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()},waitUntil:{endsWith:g(),endsWithout:g(),startsWith:g(),startsWithout:g()}};function vs(e,t,n){const r=hh(t);if(!r.includes(e))throw new k(`${String(e)} is not an enum value in '${r.join(",")}'.`,n)}function N1(e,t,n){try{vs(e,t)}catch{return}const r=hh(t);throw new k(`${String(e)} is an enum value in '${r.join(",")}'`,n)}const x1={isEnumValue:vs,isNotEnumValue:N1},Dh={assert:x1,check:{isEnumValue:g(),isNotEnumValue:g()},assertWrap:{isEnumValue:g(),isNotEnumValue:g()},checkWrap:{isEnumValue:g(),isNotEnumValue:g()},waitUntil:{isEnumValue:g(),isNotEnumValue:g()}};function vh(e,t,n){if(e!==t)throw new k(`

${P(e)}

does not strictly equal

${P(t)}

`,n)}function B1(e,t,n){if(e===t)throw new k(`

${P(e)}

strictly equals

${P(t)}

`,n)}function P1(e,t,n){if(e!=t)throw new k(`

${P(e)}

does not loosely equal

${P(t)}

`,n)}function L1(e,t,n){if(e==t)throw new k(`

${P(e)}

loosely equals

${P(t)}

`,n)}function _a(e,t,n){if(!Ve(e,t))throw new k(`

${P(e)}

does not deeply equal

${P(t)}

`,n)}function I1(e,t,n){if(Ve(e,t))throw new k(`

${P(e)}

deeply equals

${P(t)}

`,n)}const R1={strictEquals:vh,notStrictEquals:B1,looseEquals:P1,notLooseEquals:L1,deepEquals:_a,notDeepEquals:I1},Ah={assert:R1,check:{strictEquals:g(),notStrictEquals:y,looseEquals:y,notLooseEquals:y,deepEquals:g(),notDeepEquals:y},assertWrap:{strictEquals:g(),notStrictEquals:y,looseEquals:y,notLooseEquals:y,deepEquals:g(),notDeepEquals:y},checkWrap:{strictEquals:g(),notStrictEquals:y,looseEquals:y,notLooseEquals:y,deepEquals:g(),notDeepEquals:y},waitUntil:{strictEquals:g(),notStrictEquals:y,looseEquals:y,notLooseEquals:y,deepEquals:g(),notDeepEquals:y}};function $h(e,t,n){if(!e||typeof e!="object")throw new k(`${P(e)} is not an object.`,n);if(!t||typeof t!="object")throw new k(`${P(t)} is not an object.`,n);Array.from(new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(t)])).forEach(i=>{const s=e[i],o=t[i];try{vh(s,o)}catch{throw new k(`Entries are not equal at key '${String(i)}'.`,n)}})}function O1(e,t,n){try{$h(e,t)}catch{return}throw new k("Entries are equal.",n)}const _1={entriesEqual:$h,notEntriesEqual:O1},Ch={assert:_1,check:{entriesEqual:g(),notEntriesEqual:y},assertWrap:{entriesEqual:g(),notEntriesEqual:y},checkWrap:{entriesEqual:g(),notEntriesEqual:y},waitUntil:{entriesEqual:g(),notEntriesEqual:y}};function kl(e,t){return JSON.stringify(e)===JSON.stringify(t)}function Va(e,t,n){try{U1(e,t)}catch(r){throw new k(Jn(r),n)}}function V1(e,t,n){try{Va(e,t)}catch{return}throw new k("Values are JSON equal.",n)}function U1(e,t){const n=kl(e,t);if(!(e===t||n)){if(e!=null&&t!=null&&typeof e=="object"&&typeof t=="object"){const r=Object.keys(e).sort(),i=Object.keys(t).sort();if(r.length||i.length){if(!kl(r,i))throw new Error("Values are JSON equal.");Object.keys(e).forEach(o=>{try{Va(e[o],t[o])}catch(a){throw new Error(`JSON objects are not equal at key '${o}': ${Jn(a)}`)}})}}throw new Error("Values are not JSON equal.")}}const W1={jsonEquals:Va,notJsonEquals:V1},kh={assert:W1,check:{jsonEquals:g(),notJsonEquals:y},assertWrap:{jsonEquals:g(),notJsonEquals:y},checkWrap:{jsonEquals:g(),notJsonEquals:y},waitUntil:{jsonEquals:g(),notJsonEquals:y}};function As(e,t,n){try{if(!Reflect.ownKeys(e).map(i=>e[i]).includes(t))throw new Error("fail")}catch{throw new k(`'${P(e)}' does not have value '${P(t)}'.`,n)}}function Sh(e,t,n){try{As(e,t)}catch{return}throw new k(`'${P(e)}' has value '${P(t)}'.`,n)}function q1(e,t,n){t.forEach(r=>As(e,r,n))}function j1(e,t,n){t.forEach(r=>Sh(e,r,n))}function Ua(e,t,n){if(typeof t=="string"){if(!t.includes(e))throw new k(`${P(e)} is not in '${t}'.`,n)}else As(t,e,n)}function z1(e,t,n){try{Ua(e,t)}catch{return}throw new k(`${P(e)} is not in ${P(t)}.`,n)}function Fh(e,t){const n=e;if(n){if(typeof n!="string"&&typeof n!="object")throw new TypeError(`Cannot check if '${P(n)}' is empty.`);if(typeof n=="string"&&n||Array.isArray(n)&&n.length||n instanceof Map&&n.size||n instanceof Set&&n.size||n&&typeof n=="object"&&Object.keys(n).length)throw new k(`'${P(e)}' is not empty.`,t)}else return}function G1(e,t){try{Fh(e)}catch{return}throw new k(`'${P(e)}' is empty.`,t)}const K1={hasValue:As,lacksValue:Sh,hasValues:q1,lacksValues:j1,isIn:Ua,isNotIn:z1,isEmpty:Fh,isNotEmpty:G1},Th={assert:K1,check:{hasValue:y,lacksValue:y,hasValues:y,lacksValues:y,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},assertWrap:{hasValue:y,lacksValue:y,hasValues:y,lacksValues:y,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},checkWrap:{hasValue:y,lacksValue:y,hasValues:y,lacksValues:y,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()},waitUntil:{hasValue:y,lacksValue:y,hasValues:y,lacksValues:y,isIn:g(),isNotIn:g(),isEmpty:g(),isNotEmpty:g()}};function Z1(e,t){try{vs(e,x)}catch{throw new k(`${P(e)} is not a valid http status.`,t)}}function Y1(e,t,n){try{vs(e,x),Ua(e,Qw[t])}catch{throw new k(`${P(e)} is not a '${t}' http status.`,n)}}const J1={isHttpStatus:Z1,isHttpStatusCategory:Y1},Mh={assert:J1,check:{isHttpStatus:y,isHttpStatusCategory:g()},assertWrap:{isHttpStatus:y,isHttpStatusCategory:g()},checkWrap:{isHttpStatus:y,isHttpStatusCategory:g()},waitUntil:{isHttpStatus:y,isHttpStatusCategory:g()}};function H1(e,t,n){if(!(e instanceof t))throw new k(`'${P(e)}' is not an instance of '${t.name}'`,n)}function Q1(e,t,n){if(e instanceof t)throw new k(`'${P(e)}' is an instance of '${t.name}'`,n)}const X1={instanceOf:H1,notInstanceOf:Q1},Nh={assert:X1,check:{instanceOf:g(),notInstanceOf:g()},assertWrap:{instanceOf:g(),notInstanceOf:g()},checkWrap:{instanceOf:g(),notInstanceOf:g()},waitUntil:{instanceOf:g(),notInstanceOf:g()}};function e2(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Ds(t,i,()=>xh(s)),r),{})}function xh(e){return(...t)=>t2(e,...t)}function t2(e,t,...n){try{return e(t,...n),!0}catch{return!1}}function Bh(e,t,n){try{$s(t,e)}catch{throw new k(`'${String(e)}' is not a key of '${P(t)}'.`,n)}}function n2(e,t,n){try{Bh(e,t)}catch{return}throw new k(`'${String(e)}' is a key of '${P(t)}'.`,n)}const r2=[(e,t)=>t in e,(e,t)=>t in e.constructor.prototype];function $s(e,t,n){const r=`'${P(e)}' does not have key '${String(t)}'.`;if(!r2.some(s=>{try{return s(e,t)}catch{return!1}}))throw new k(r,n)}function i2(e,t,n){try{$s(e,t)}catch{return}throw new k(`'${P(e)}' has key '${String(t)}'.`,n)}const Ph=xh($s);function s2(e,t,n){const r=t.filter(i=>!Ph(e,i));if(r.length)throw new k(`'${P(e)}' does not have keys '${r.join(",")}'.`,n)}function o2(e,t,n){const r=t.filter(i=>Ph(e,i));if(r.length)throw new k(`'${P(e)}' does not lack keys '${r.join(",")}'.`,n)}const a2={isKeyOf:Bh,isNotKeyOf:n2,hasKey:$s,lacksKey:i2,hasKeys:s2,lacksKeys:o2},Lh={assert:a2,check:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},assertWrap:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},checkWrap:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()},waitUntil:{isKeyOf:g(),isNotKeyOf:g(),hasKey:g(),lacksKey:g(),hasKeys:g(),lacksKeys:g()}};function u2(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Es(e).length)<t)throw new k(`Length '${e.length}' is not at least '${t}'.`,n)}function l2(e,t,n){if((Array.isArray(e)||typeof e=="string"?e.length:Es(e).length)!==t)throw new k(`Length '${e.length}' is not exactly '${t}'.`,n)}const c2={isLengthAtLeast:u2,isLengthExactly:l2},Ih={assert:c2,check:{isLengthAtLeast:g(),isLengthExactly:g()},assertWrap:{isLengthAtLeast:g(),isLengthExactly:g()},checkWrap:{isLengthAtLeast:g(),isLengthExactly:g()},waitUntil:{isLengthAtLeast:g(),isLengthExactly:g()}};function f2(e,t){if(e==null)throw new k(`'${P(e)}' is not defined.`,t)}function d2(e,t){if(e!=null)throw new k(`'${P(e)}' is not a nullish.`,t)}const h2={isDefined:f2,isNullish:d2},Rh={assert:h2,check:{isDefined:g(),isNullish:y},assertWrap:{isDefined:g(),isNullish:y},checkWrap:{isDefined:void 0,isNullish:void 0},waitUntil:{isDefined:g(),isNullish:y}};function m2(e,t,n){if(e<=t)throw new k(`${e} is not above ${t}`,n)}function p2(e,t,n){if(e<t)throw new k(`${e} is not at least ${t}`,n)}function g2(e,{max:t,min:n},r){if(e<n||t<e)throw new k(`${e} is not within the bounds ${P({min:n,max:t})}`,r)}function y2(e,{min:t,max:n},r){if(t<=e&&e<=n)throw new k(`${e} is not outside the bounds ${P({min:t,max:n})}`,r)}function w2(e,t){if(gh(e),!Number.isInteger(e))throw new k(`${e} is not an integer.`,t)}function b2(e,t){if(Number.isInteger(e))throw new k(`${e} is an integer.`,t)}function E2(e,t,n){if(e>=t)throw new k(`${e} is not below ${t}`,n)}function D2(e,t,n){if(e>t)throw new k(`${e} is not at most ${t}`,n)}function v2(e,t){if(!isNaN(e))throw new k(`${e} is not NaN`,t)}function A2(e,t){if(isNaN(e)||e===1/0||e===-1/0)throw new k(`${e} is not finite`,t)}function $2(e,t){if(e!==1/0&&e!==-1/0)throw new k(`${e} is not infinite`,t)}function C2(e,t,n,r){if(e<t-n||e>t+n)throw new k(`${e} is not within ±${n} of ${t}`,r)}function k2(e,t,n,r){if(e>=t-n&&e<=t+n)throw new k(`${e} is within ±${n} of ${t}`,r)}const S2={isInBounds:g2,isOutBounds:y2,isInteger:w2,isNotInteger:b2,isAbove:m2,isAtLeast:p2,isBelow:E2,isAtMost:D2,isNaN:v2,isFinite:A2,isInfinite:$2,isApproximately:C2,isNotApproximately:k2},Oh={assert:S2,check:{isInBounds:y,isOutBounds:y,isInteger:y,isNotInteger:y,isAbove:y,isAtLeast:y,isBelow:y,isAtMost:y,isNaN:y,isFinite:y,isInfinite:y,isApproximately:y,isNotApproximately:y},assertWrap:{isInBounds:y,isOutBounds:y,isInteger:y,isNotInteger:y,isAbove:y,isAtLeast:y,isBelow:y,isAtMost:y,isNaN:y,isFinite:y,isInfinite:y,isApproximately:y,isNotApproximately:y},checkWrap:{isInBounds:y,isOutBounds:y,isInteger:y,isNotInteger:y,isAbove:y,isAtLeast:y,isBelow:y,isAtMost:y,isNaN:y,isFinite:y,isInfinite:y,isApproximately:y,isNotApproximately:y},waitUntil:{isInBounds:y,isOutBounds:y,isInteger:y,isNotInteger:y,isAbove:y,isAtLeast:y,isBelow:y,isAtMost:y,isNaN:y,isFinite:y,isInfinite:y,isApproximately:y,isNotApproximately:y}},Sl={interval:{milliseconds:100},timeout:{seconds:10}},vo=Symbol("not set");async function _h(e,t,n){const{callback:r,extraAssertionArgs:i,failureMessage:s,options:o}=T2(t),a=lt(o.timeout,{milliseconds:!0}).milliseconds,u=lt(o.interval,{milliseconds:!0});let l=vo,f;async function c(){try{l=n?r():await r(),e(l,...i)}catch(p){l=vo,f=Ft(p)}}const d=Date.now();for(;l===vo;)if(await c(),await ph(u),Date.now()-d>=a){const b=`${s?`${s}: `:""}Timeout of '${a}' milliseconds exceeded waiting for callback value to match expectations`;throw mh(f,b)}return l}function F2(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Ds(t,i,()=>_n(s)),r),{})}function _n(e,t=!1){return(...n)=>_h(e,n,t)}function T2(e){const t={extraAssertionArgs:[],options:void 0,failureMessage:void 0};if(e.toReversed().forEach(n=>{if(t.callback)t.extraAssertionArgs.push(n);else if(typeof n=="function")t.callback=n;else if(typeof n=="string")t.failureMessage=n;else if(typeof n=="object")t.options=n;else{if(n===void 0)return;throw new TypeError(`Unexpected waitUntil arg: ${JSON.stringify(n)}`)}}),!t.callback)throw new TypeError("Missing waitUntil callback.");return{callback:t.callback,options:Vh(t.options),extraAssertionArgs:t.extraAssertionArgs.toReversed(),failureMessage:t.failureMessage}}function Vh(e){return{interval:e?.interval||Sl.interval,timeout:e?.timeout||Sl.timeout}}function M2(e,t,n,r,i){return ni(...Cs(e,t,n,r,i),!1)}function Cs(e,t,n,r,i){const s=Array.isArray(n);return[s?e:_a,s?t:e,s?n:t,s?r:n,s?i:r]}function ni(e,t,n,r,i,s){const o=t(...n);if(o instanceof Promise)return new Promise(async(a,u)=>{try{const l=await o;e(l,r),s?a(l):a()}catch(l){u(new k(`Output from '${t.name}' did not produce expected output with input: ${P(n)}: ${Jn(l)}`,i))}});try{return e(o,r),s?o:void 0}catch(a){throw new k(`Output from '${t.name}' did not produce expected output with input: ${P(n)}: ${Jn(a)}`,i)}}function N2(e,t,n,r,i){try{const s=ni(...Cs(e,t,n,r,i),!1);return s instanceof Promise?new Promise(async o=>{try{await s,o(!0)}catch{o(!1)}}):!0}catch{return!1}}function x2(e,t,n,r,i){return ni(...Cs(e,t,n,r,i),!0)}function B2(e,t,n,r,i){try{const s=ni(...Cs(e,t,n,r,i),!0);return s instanceof Promise?new Promise(async o=>{try{o(await s)}catch{o(void 0)}}):s}catch{return}}const Ao=Symbol("not set");async function P2(e,t,n,r,i,s){const o=Array.isArray(n),a=o?e:_a,u=o?t:e,l=o?n:t,f=o?r:n,c=Vh(o?i:r),d=o?s:i,p=lt(c.timeout,{milliseconds:!0}).milliseconds,b=lt(c.interval,{milliseconds:!0});let D=Ao,$;async function A(){try{D=await ni(a,u,l,f,void 0,!0)}catch(I){D=Ao,$=Ft(I)}}const F=Date.now();for(;D===Ao;)if(await A(),await ph(b),Date.now()-F>=p)throw mh($,Oa(d,`Timeout of '${p}' milliseconds exceeded waiting for callback value to match expectations`));return D}const L2={output:M2},Uh={assert:L2,check:{output:N2},assertWrap:{output:x2},checkWrap:{output:B2},waitUntil:{output:P2}};function Wh(e,t){if(e!==null&&(typeof e=="object"||typeof e=="function"))throw new k(`'${P(e)}' is not a Primitive.`,t)}function I2(e,t){try{Wh(e)}catch{return}throw new k(`'${P(e)}' is a Primitive.`,t)}function qh(e,t){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new k(`'${P(e)}' is not a PropertyKey.`,t)}function R2(e,t){try{qh(e)}catch{return}throw new k(`'${P(e)}' is a PropertyKey.`,t)}const O2={isPropertyKey:qh,isNotPropertyKey:R2,isPrimitive:Wh,isNotPrimitive:I2},jh={assert:O2,check:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:y,isPropertyKey:y},assertWrap:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:y,isPropertyKey:y},checkWrap:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:y,isPropertyKey:y},waitUntil:{isNotPrimitive:g(),isNotPropertyKey:g(),isPrimitive:y,isPropertyKey:y}};function Wa(e,t){if(!(e instanceof Promise)&&!(e&&typeof e=="object"&&"then"in e&&typeof e.then=="function"))throw new k(`'${P(e)}' is not a PromiseLike.`,t)}function zh(e,t){try{Wa(e)}catch{return}throw new k(`'${P(e)}' is a PromiseLike.`,t)}function Gh(e,t){if(!(e instanceof Promise))throw new k(`'${P(e)}' is not a Promise.`,t)}function Kh(e,t){if(e instanceof Promise)throw new k(`'${P(e)}' is a Promise.`,t)}const _2={isPromiseLike:Wa,isNotPromiseLike:zh,isPromise:Gh,isNotPromise:Kh},Zh={assert:_2,check:{isPromiseLike:y,isNotPromiseLike:g(),isPromise:y,isNotPromise:g()},assertWrap:{isPromiseLike:g(),isNotPromiseLike:g(),isPromise:g(),isNotPromise:g()},checkWrap:{isNotPromise:g(),isNotPromiseLike:g(),isPromise:y,isPromiseLike:y},waitUntil:{isPromiseLike:_n(Wa,!0),isNotPromiseLike:_n(zh,!0),isPromise:_n(Gh,!0),isNotPromise:_n(Kh,!0)}};function V2(e,t,n){if(!t.test(e))throw new k(`'${e}' does not match ${t}`,n)}function U2(e,t,n){if(t.test(e))throw new k(`'${e}' matches ${t}`,n)}const W2={matches:V2,mismatches:U2},Yh={assert:W2,check:{matches:y,mismatches:y},assertWrap:{matches:y,mismatches:y},checkWrap:{matches:y,mismatches:y},waitUntil:{matches:y,mismatches:y}};var Ne;(function(e){e.Assert="assert",e.AssertWrap="assert-wrap",e.CheckWrap="check-wrap",e.Check="check"})(Ne||(Ne={}));function Jh(e,t,n){Hh(e,{noError:"No error.",notInstance:`'${P(e)}' is not an error instance.`},t,n)}function Fl(e,t,n){Hh(e,{noError:"No Error was thrown.",notInstance:`Thrown value '${P(e)}' is not an error instance.`},t,n)}function Hh(e,t,n,r){if(e)if(e instanceof Error){if(n?.matchConstructor&&!(e instanceof n.matchConstructor)){const i=e.constructor.name;throw new k(`Error constructor '${i}' did not match expected constructor '${n.matchConstructor.name}'.`,r)}else if(n?.matchMessage){const i=Jn(e);if(typeof n.matchMessage=="string"){if(!i.includes(n.matchMessage))throw new k(`Error message

'${i}'

does not contain

'${n.matchMessage}'.`,r)}else if(!i.match(n.matchMessage))throw new k(`Error message

'${i}'

does not match RegExp

'${n.matchMessage}'.`,r)}}else throw new k(t.notInstance,r);else throw new k(t.noError,r)}function ks(e,t,n,r){let i;try{const s=t instanceof Promise?t:t();if(s instanceof Promise)return new Promise(async(o,a)=>{try{await s}catch(u){i=Ft(u)}try{Fl(i,n,r),e===Ne.Assert?o():e===Ne.Check?o(!0):o(i)}catch(u){e===Ne.CheckWrap?o(void 0):e===Ne.Check?o(!1):a(Ft(u))}})}catch(s){i=Ft(s)}try{return Fl(i,n,r),e===Ne.Check?!0:e!==Ne.Assert?i:void 0}catch(s){if(e===Ne.CheckWrap)return;if(e===Ne.Check)return!1;throw s}}function q2(e,t,n){return ks(Ne.Assert,e,t,n)}function j2(e,t){return ks(Ne.Check,e,t)}function z2(e,t,n){return ks(Ne.AssertWrap,e,t,n)}function G2(e,t,n){return ks(Ne.CheckWrap,e,t,n)}const K2=_n(Jh);function Z2(e,t,n,r){const i=typeof e=="function"||e instanceof Promise?void 0:e,s=i?t:e,o=typeof n=="object"?r:n,a=typeof n=="object"?n:t;if(typeof s!="function")throw new TypeError(`Callback is not a function, got '${P(s)}'`);return K2(i,async()=>{try{await s();return}catch(u){return Ft(u)}},a,o)}const Y2={throws:q2,isError:Jh},Qh={assert:Y2,check:{throws:j2,isError:y},assertWrap:{throws:z2,isError:y},checkWrap:{throws:G2,isError:y},waitUntil:{throws:Z2,isError:y}},Xh=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;function J2(e,t){if(!String(e).match(Xh))throw new k(`'${String(e)}' is not a UUID.`,t)}function H2(e,t){if(String(e).match(Xh))throw new k(`'${String(e)}' is a UUID.`,t)}const Q2={isUuid:J2,isNotUuid:H2},e0={assert:Q2,check:{isUuid:y,isNotUuid:g()},assertWrap:{isUuid:y,isNotUuid:g()},checkWrap:{isUuid:y,isNotUuid:g()},waitUntil:{isUuid:y,isNotUuid:g()}},ri={...bh.assert,...Eh.assert,...Ch.assert,...Dh.assert,...Nh.assert,...kh.assert,...Lh.assert,...Ih.assert,...Rh.assert,...Oh.assert,...jh.assert,...Zh.assert,...Yh.assert,...yh.assert,...Ah.assert,...Qh.assert,...e0.assert,...Th.assert,...Mh.assert,...Uh.assert},Ss=[bh,Eh,Ch,Dh,Nh,kh,Lh,Ih,Rh,Oh,jh,Zh,Yh,yh,Ah,Qh,e0,Th,Mh,Uh],X2=Object.assign({},...Ss.map(e=>e.check)),eb=Object.assign({},...Ss.map(e=>e.assertWrap)),tb=Object.assign({},...Ss.map(e=>e.checkWrap)),nb=Object.assign({},...Ss.map(e=>e.waitUntil)),rb=e2(ri,X2),Xo=Object.assign(function(t){return!!t},rb);function ib(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Ds(t,i,()=>sb(s)),r),{})}function sb(e){return(...t)=>(e(...t),t[0])}const ob=ib(ri,eb);Object.assign(function(t,n){if(!t)throw new k("Assertion failed.",n);return t},ob);function ab(e){return{equals:()=>{},notEquals:()=>{},matches:()=>{},notMatches:()=>{},slowEquals:()=>{}}}const ub={tsType:ab},lb={assert:ub},cb={fail:e=>{throw new k("Failure triggered.",e)}},fb={...lb.assert,...ri,...cb};Object.assign(function(t,n){if(!t)throw new k("Assertion failed.",n)},fb);function db(e,t){return Object.entries(e).reduce((r,[i,s])=>(r[i]=Ds(t,i,()=>hb(s)),r),{})}function hb(e){return(...t)=>{try{return e(...t),t[0]}catch{return}}}const mb=db(ri,tb);Object.assign(function(t){if(t)return t},mb);const pb=F2(ri,nb);Object.assign(function(t,n){return _h((r,i)=>{if(!r)throw new k("Assertion failed.",i)},[t,n],!1)},pb);function gb(e,t,n){if(t in e)return e[t];{const r=n();return Xo.isPromise(r)?new Promise(async(i,s)=>{try{const o=await r;e[t]=o,i(o)}catch(o){s(Ft(o))}}):(e[t]=r,r)}}function Tl(e){return Es(e).map(t=>e[t])}class yb{listeners={};getListenerCount(){return Tl(this.listeners).map(n=>n.size||0).reduce((n,r)=>n+r,0)}listen(t,n,r={}){const i=this.listeners,s=Xo.isString(t)?t:t.type;function o(){return i[s]?.delete(n)||!1}function a(u,l){r.once&&o(),n(u,l)}return gb(i,s,()=>new Map).set(n,{listener:a,removeListener:o}),o}removeListener(t,n){const r=Xo.isString(t)?t:t.type,i=this.listeners[r];if(!i)return!1;const s=i.get(n);return s?s.removeListener():!1}dispatch(t){const n=this.listeners[t.type],r=n?.size||0;return n?.forEach(i=>{i.listener(t,i.removeListener)}),r}removeAllListeners(){const n=Tl(this.listeners).reduce((r,i)=>{const s=i.size||0;return i.clear(),r+s},0);return this.listeners={},n}destroy(){this.removeAllListeners()}}class t0 extends yb{}function n0(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Ml(e,t,n){return n0(globalThis,e,t,n)}function qa(e,t){return Ji(e.title),e.parent?[...qa(e.parent),Ji(e.parent.title)].concat([]):[]}function Ji(e){return Zw(e).toLowerCase().replaceAll(/\s/g,"-")}function wb({searchFor:e,searchIn:t}){return e.every((n,r)=>t[r]===n)}const bb={[De.ElementExample]:()=>[],[De.Page]:e=>[!e.title&&new Error("Cannot define an element-book page with an empty title."),...ww(e.controls,e.title)].filter(w.isTruthy),[De.Root]:()=>[]},Hi="_isBookTreeNode",r0=new Map;function Eb(e){return r0.get(e)}function Db(e,t){bw(r0,e,()=>t)}function zn(e,t){return!!(i0(e)&&e.entry.entryType===t)}function i0(e){return!!(w.hasKeys(e,[Hi,"entry"])&&e[Hi])}function vb(){return{[Hi]:!0,entry:{entryType:De.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Ab({entries:e,debug:t}){const n=Eb(e);if(n)return n;const r=vb();e.forEach(o=>ja({tree:r,newEntry:o,debug:t,manuallyAdded:!0}));const i=s0(r),s={tree:r,flattenedNodes:i};return Db(e,s),t&&console.info("element-book tree:",r),s}function $b(e,t,n){if(!t.parent)return e;const r=ea(t,e);if(r)return r;n&&console.info(`parent of ${t.title} not found in tree; adding it now.`),ja({tree:e,newEntry:t.parent,debug:n,manuallyAdded:!1});const i=ea(t,e);if(!i)throw new Error(`Failed to find node despite having just added it: ${qa(t).join(" > ")}`);return i}function ja({tree:e,newEntry:t,debug:n,manuallyAdded:r}){const i=bb[t.entryType](t);t.errors.push(...i);const s=$b(e,t,n),o=Ji(t.title),a=s.children[o];if(a){if(r){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${o}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const u={[Hi]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,o],entry:t,manuallyAdded:r};s.children[o]=u,gw(t,De.Page)&&Object.values(t.elementExamples).length&&Object.values(t.elementExamples).forEach(l=>ja({tree:e,newEntry:l,debug:n,manuallyAdded:r}))}function ea(e,t){const n=i0(e)?e.fullUrlBreadcrumbs.slice(0,-1):qa(e);return n.length?n.reduce((i,s)=>{if(i)return i.children[s]},t):void 0}function s0(e){const n=!!e.entry.errors.length?[]:Object.values(e.children).map(i=>s0(i));return[e,...n].flat()}function za(e,t){return Ga(e,["",...t],void 0)}function Ga(e,t,n){const r=t.slice(1),i=r[0];!i&&n&&(e.controls=n);const s=e.children[i||""],o=s&&Ga(s,r,n);return{...e.controls,...o}}function Cb(e,t,n){const r={...e};return Ga(r,["",...t],n),r}function o0(e,t){const n=t?.controls||(zn(e,De.Page)?pe(e.entry.controls,(i,s)=>s.initValue):{});return{children:pe(e.children,(i,s)=>o0(s,t?.children?.[s.urlBreadcrumb])),controls:n}}function ft(e){const t={...e,entryType:De.Page,elementExamples:{},descriptionParagraphs:e.descriptionParagraphs??[],controls:e.controls??{},errors:[]},n=new Set;return e.defineExamples&&e.defineExamples({defineExample(r){const i={...r,entryType:De.ElementExample,parent:t,descriptionParagraphs:r.descriptionParagraphs??[],errors:[n.has(r.title)&&new Error(`Example title '${r.title}' in page '${e.title}' is already taken.`)].filter(w.isTruthy)};n.add(r.title),t.elementExamples[Ji(i.title)]=i}}),t}var it=(e=>(e.Search="search",e.Book="book",e))(it||{});function ta(e){return e[0]==="book"?"":e[1]?decodeURIComponent(e[1]):""}const Hn={hash:void 0,paths:["book"],search:void 0};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oi=globalThis,Ka=Oi.ShadowRoot&&(Oi.ShadyCSS===void 0||Oi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Za=Symbol(),Nl=new WeakMap;let a0=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Za)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Ka&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Nl.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Nl.set(n,t))}return t}toString(){return this.cssText}};const ue=e=>new a0(typeof e=="string"?e:e+"",void 0,Za),_i=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new a0(n,e,Za)},kb=(e,t)=>{if(Ka)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Oi.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},xl=Ka?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return ue(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Sb,defineProperty:Fb,getOwnPropertyDescriptor:Tb,getOwnPropertyNames:Mb,getOwnPropertySymbols:Nb,getPrototypeOf:xb}=Object,Fs=globalThis,Bl=Fs.trustedTypes,Bb=Bl?Bl.emptyScript:"",Pb=Fs.reactiveElementPolyfillSupport,Sr=(e,t)=>e,Qi={toAttribute(e,t){switch(t){case Boolean:e=e?Bb:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ya=(e,t)=>!Sb(e,t),Pl={attribute:!0,type:String,converter:Qi,reflect:!1,hasChanged:Ya};Symbol.metadata??=Symbol("metadata"),Fs.litPropertyMetadata??=new WeakMap;let Bn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Pl){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Fb(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=Tb(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i?.call(this)},set(o){const a=i?.call(this);s.call(this,o),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pl}static _$Ei(){if(this.hasOwnProperty(Sr("elementProperties")))return;const t=xb(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Sr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sr("properties"))){const n=this.properties,r=[...Mb(n),...Nb(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(xl(i))}else t!==void 0&&n.push(xl(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kb(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:Qi).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Qi;this._$Em=i,this[i]=o.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??Ya)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}};Bn.elementStyles=[],Bn.shadowRootOptions={mode:"open"},Bn[Sr("elementProperties")]=new Map,Bn[Sr("finalized")]=new Map,Pb?.({ReactiveElement:Bn}),(Fs.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ja=globalThis,Xi=Ja.trustedTypes,Ll=Xi?Xi.createPolicy("lit-html",{createHTML:e=>e}):void 0,u0="$lit$",Gt=`lit$${Math.random().toFixed(9).slice(2)}$`,l0="?"+Gt,Lb=`<${l0}>`,En=document,Pr=()=>En.createComment(""),Lr=e=>e===null||typeof e!="object"&&typeof e!="function",Ha=Array.isArray,Ib=e=>Ha(e)||typeof e?.[Symbol.iterator]=="function",$o=`[ 	
\f\r]`,yr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Il=/-->/g,Rl=/>/g,cn=RegExp(`>|${$o}(?:([^\\s"'>=/]+)(${$o}*=${$o}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ol=/'/g,_l=/"/g,c0=/^(?:script|style|textarea|title)$/i,Rb=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Ob=Rb(1),ze=Symbol.for("lit-noChange"),re=Symbol.for("lit-nothing"),Vl=new WeakMap,pn=En.createTreeWalker(En,129);function f0(e,t){if(!Ha(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ll!==void 0?Ll.createHTML(t):t}const _b=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=yr;for(let a=0;a<n;a++){const u=e[a];let l,f,c=-1,d=0;for(;d<u.length&&(o.lastIndex=d,f=o.exec(u),f!==null);)d=o.lastIndex,o===yr?f[1]==="!--"?o=Il:f[1]!==void 0?o=Rl:f[2]!==void 0?(c0.test(f[2])&&(i=RegExp("</"+f[2],"g")),o=cn):f[3]!==void 0&&(o=cn):o===cn?f[0]===">"?(o=i??yr,c=-1):f[1]===void 0?c=-2:(c=o.lastIndex-f[2].length,l=f[1],o=f[3]===void 0?cn:f[3]==='"'?_l:Ol):o===_l||o===Ol?o=cn:o===Il||o===Rl?o=yr:(o=cn,i=void 0);const p=o===cn&&e[a+1].startsWith("/>")?" ":"";s+=o===yr?u+Lb:c>=0?(r.push(l),u.slice(0,c)+u0+u.slice(c)+Gt+p):u+Gt+(c===-2?a:p)}return[f0(e,s+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Ir{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const a=t.length-1,u=this.parts,[l,f]=_b(t,n);if(this.el=Ir.createElement(l,r),pn.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=pn.nextNode())!==null&&u.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(u0)){const d=f[o++],p=i.getAttribute(c).split(Gt),b=/([.?@])?(.*)/.exec(d);u.push({type:1,index:s,name:b[2],strings:p,ctor:b[1]==="."?Ub:b[1]==="?"?Wb:b[1]==="@"?qb:Ts}),i.removeAttribute(c)}else c.startsWith(Gt)&&(u.push({type:6,index:s}),i.removeAttribute(c));if(c0.test(i.tagName)){const c=i.textContent.split(Gt),d=c.length-1;if(d>0){i.textContent=Xi?Xi.emptyScript:"";for(let p=0;p<d;p++)i.append(c[p],Pr()),pn.nextNode(),u.push({type:2,index:++s});i.append(c[d],Pr())}}}else if(i.nodeType===8)if(i.data===l0)u.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(Gt,c+1))!==-1;)u.push({type:7,index:s}),c+=Gt.length-1}s++}}static createElement(t,n){const r=En.createElement("template");return r.innerHTML=t,r}}function Qn(e,t,n=e,r){if(t===ze)return t;let i=r!==void 0?n._$Co?.[r]:n._$Cl;const s=Lr(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=i:n._$Cl=i),i!==void 0&&(t=Qn(e,i._$AS(e,t.values),i,r)),t}let Vb=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=(t?.creationScope??En).importNode(n,!0);pn.currentNode=i;let s=pn.nextNode(),o=0,a=0,u=r[0];for(;u!==void 0;){if(o===u.index){let l;u.type===2?l=new ur(s,s.nextSibling,this,t):u.type===1?l=new u.ctor(s,u.name,u.strings,this,t):u.type===6&&(l=new jb(s,this,t)),this._$AV.push(l),u=r[++a]}o!==u?.index&&(s=pn.nextNode(),o++)}return pn.currentNode=En,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}};class ur{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=re,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Qn(this,t,n),Lr(t)?t===re||t==null||t===""?(this._$AH!==re&&this._$AR(),this._$AH=re):t!==this._$AH&&t!==ze&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ib(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==re&&Lr(this._$AH)?this._$AA.nextSibling.data=t:this.T(En.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ir.createElement(f0(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(n);else{const s=new Vb(i,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}_$AC(t){let n=Vl.get(t.strings);return n===void 0&&Vl.set(t.strings,n=new Ir(t)),n}k(t){Ha(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new ur(this.O(Pr()),this.O(Pr()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ts{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=re,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=re}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=Qn(this,t,n,0),o=!Lr(t)||t!==this._$AH&&t!==ze,o&&(this._$AH=t);else{const a=t;let u,l;for(t=s[0],u=0;u<s.length-1;u++)l=Qn(this,a[r+u],n,u),l===ze&&(l=this._$AH[u]),o||=!Lr(l)||l!==this._$AH[u],l===re?t=re:t!==re&&(t+=(l??"")+s[u+1]),this._$AH[u]=l}o&&!i&&this.j(t)}j(t){t===re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ub extends Ts{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===re?void 0:t}}class Wb extends Ts{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==re)}}class qb extends Ts{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=Qn(this,t,n,0)??re)===ze)return;const r=this._$AH,i=t===re&&r!==re||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==re&&(r===re||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class jb{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Qn(this,t)}}const zb={I:ur},Gb=Ja.litHtmlPolyfillSupport;Gb?.(Ir,ur),(Ja.litHtmlVersions??=[]).push("3.2.1");const Kb=(e,t,n)=>{const r=n?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const s=n?.renderBefore??null;r._$litPart$=i=new ur(t.insertBefore(Pr(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Fr=class extends Bn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Kb(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ze}};Fr._$litElement$=!0,Fr.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Fr});const Zb=globalThis.litElementPolyfillSupport;Zb?.({LitElement:Fr});(globalThis.litElementVersions??=[]).push("4.1.1");function nn(e){if(w.isObject(e))return pe(e,(n,r)=>{if(!w.isString(n))throw new TypeError(`Invalid CSS var name '${String(n)}' given. CSS var names must be strings.`);if(Gw(n).toLowerCase()!==n)throw new Error(`Invalid CSS var name '${n}' given. CSS var names must be in lower kebab case.`);const s=r,o=n.startsWith("--")?ue(n):n.startsWith("-")?_i`-${ue(n)}`:_i`--${ue(n)}`;return{name:o,value:_i`var(${o}, ${ue(s)})`,default:String(s)}});throw new TypeError(`Invalid setup input for '${nn.name}' function.`)}function Yb({onElement:e,toValue:t,forCssVar:n}){e.style.setProperty(String(n.name),String(t))}const Z=nn({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Jb={nav:{hover:{background:Z["element-book-nav-hover-background-color"],foreground:Z["element-book-nav-hover-foreground-color"]},active:{background:Z["element-book-nav-active-background-color"],foreground:Z["element-book-nav-active-foreground-color"]},selected:{background:Z["element-book-nav-selected-background-color"],foreground:Z["element-book-nav-selected-foreground-color"]}},accent:{icon:Z["element-book-accent-icon-color"]},page:{background:Z["element-book-page-background-color"],backgroundFaint1:Z["element-book-page-background-faint-level-1-color"],backgroundFaint2:Z["element-book-page-background-faint-level-2-color"],foreground:Z["element-book-page-foreground-color"],foregroundFaint1:Z["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:Z["element-book-page-foreground-faint-level-2-color"]}};function Hb(e,t){d0(e,t,Jb)}function na(e){return w.hasKey(e,"_$cssResult$")}function Ul(e){return w.hasKeys(e,["name","value","default"])&&w.isString(e.default)&&na(e.name)&&na(e.value)}function d0(e,t,n){Object.entries(t).forEach(([r,i])=>{const s=n[r];if(!s)throw new Error(`no nestedCssVar at key '${r}'`);if(na(i)){if(!Ul(s))throw new Error(`got a CSS result at '${r}' but no CSS var`);Yb({forCssVar:s,onElement:e,toValue:String(i)})}else{if(Ul(s))throw new Error(`got no CSS result at '${r}' but did find a CSS var`);d0(e,i,s)}})}function ie(e,t){let n=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(o=>[o]));let r=t[0].length,i=t[0].map((o,a)=>t.map(u=>u[a])),s=e.map(o=>i.map(a=>{let u=0;if(!Array.isArray(o)){for(let l of a)u+=o*l;return u}for(let l=0;l<o.length;l++)u+=o[l]*(a[l]||0);return u}));return n===1&&(s=s[0]),r===1?s.map(o=>o[0]):s}function ii(e){return Jt(e)==="string"}function Jt(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function es(e,{precision:t,unit:n}){return Ht(e)?"none":h0(e,t)+(n??"")}function Ht(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function ce(e){return Ht(e)?0:e}function h0(e,t){if(e===0)return 0;let n=~~e,r=0;n&&t&&(r=~~Math.log10(Math.abs(n))+1);const i=10**(t-r);return Math.floor(e*i+.5)/i}const Qb={deg:1,grad:.9,rad:180/Math.PI,turn:360};function m0(e){if(!e)return;e=e.trim();const t=/^([a-z]+)\((.+?)\)$/i,n=/^-?[\d.]+$/,r=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=e.match(t);if(s){let o=[];return s[2].replace(i,(a,u)=>{let l=u.match(r),f=u;if(l){let c=l[0],d=f.slice(0,-c.length);c==="%"?(f=new Number(d/100),f.type="<percentage>"):(f=new Number(d*Qb[c]),f.type="<angle>",f.unit=c)}else n.test(f)?(f=new Number(f),f.type="<number>"):f==="none"&&(f=new Number(NaN),f.none=!0);a.startsWith("/")&&(f=f instanceof Number?f:new Number(f),f.alpha=!0),typeof f=="object"&&f instanceof Number&&(f.raw=u),o.push(f)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:o}}}function p0(e){return e[e.length-1]}function Rr(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function g0(e,t,n){return(n-e)/(t-e)}function Qa(e,t,n){return Rr(t[0],t[1],g0(e[0],e[1],n))}function y0(e){return e.map(t=>t.split("|").map(n=>{n=n.trim();let r=n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(r){let i=new String(r[1]);return i.range=[+r[2],+r[3]],i}return n}))}function w0(e,t,n){return Math.max(Math.min(n,t),e)}function Ms(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function pt(e,t){return Ms(Math.abs(e)**t,e)}function Xa(e,t){return t===0?0:e/t}function b0(e,t,n=0,r=e.length){for(;n<r;){const i=n+r>>1;e[i]<t?n=i+1:r=i}return n}var Xb=Object.freeze({__proto__:null,bisectLeft:b0,clamp:w0,copySign:Ms,interpolate:Rr,interpolateInv:g0,isNone:Ht,isString:ii,last:p0,mapRange:Qa,multiplyMatrices:ie,parseCoordGrammar:y0,parseFunction:m0,serializeNumber:es,skipNone:ce,spow:pt,toPrecision:h0,type:Jt,zdiv:Xa});class eE{add(t,n,r){if(typeof arguments[0]!="string"){for(var t in arguments[0])this.add(t,arguments[0][t],arguments[1]);return}(Array.isArray(t)?t:[t]).forEach(function(i){this[i]=this[i]||[],n&&this[i][r?"unshift":"push"](n)},this)}run(t,n){this[t]=this[t]||[],this[t].forEach(function(r){r.call(n&&n.context?n.context:n,n)})}}const Qt=new eE;var Ge={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}};const Ce={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function ra(e){return Array.isArray(e)?e:Ce[e]}function ts(e,t,n,r={}){if(e=ra(e),t=ra(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let i={W1:e,W2:t,XYZ:n,options:r};if(Qt.run("chromatic-adaptation-start",i),i.M||(i.W1===Ce.D65&&i.W2===Ce.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===Ce.D50&&i.W2===Ce.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Qt.run("chromatic-adaptation-end",i),i.M)return ie(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const tE=new Set(["<number>","<percentage>","<angle>"]);function Wl(e,t,n,r){return Object.entries(e.coords).map(([s,o],a)=>{let u=t.coordGrammar[a],l=r[a],f=l?.type,c;if(l.none?c=u.find(b=>tE.has(b)):c=u.find(b=>b==f),!c){let b=o.name||s;throw new TypeError(`${f??l.raw} not allowed for ${b} in ${n}()`)}let d=c.range;f==="<percentage>"&&(d||=[0,1]);let p=o.range||o.refRange;return d&&p&&(r[a]=Qa(d,p,r[a])),c})}function E0(e,{meta:t}={}){let n={str:String(e)?.trim()};if(Qt.run("parse-start",n),n.color)return n.color;if(n.parsed=m0(n.str),n.parsed){let r=n.parsed.name;if(r==="color"){let i=n.parsed.args.shift(),s=i.startsWith("--")?i.substring(2):`--${i}`,o=[i,s],a=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let f of B.all){let c=f.getFormat("color");if(c&&(o.includes(c.id)||c.ids?.filter(d=>o.includes(d)).length)){const d=Object.keys(f.coords).map((b,D)=>n.parsed.args[D]||0);let p;return c.coordGrammar&&(p=Wl(f,c,"color",d)),t&&Object.assign(t,{formatId:"color",types:p}),c.id.startsWith("--")&&!i.startsWith("--")&&Ge.warn(`${f.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${c.id}) instead of color(${i}).`),i.startsWith("--")&&!c.id.startsWith("--")&&Ge.warn(`${f.name} is a standard space and supported in the CSS spec. Use color(${c.id}) instead of prefixed color(${i}).`),{spaceId:f.id,coords:d,alpha:a}}}let u="",l=i in B.registry?i:s;if(l in B.registry){let f=B.registry[l].formats?.color?.id;f&&(u=`Did you mean color(${f})?`)}throw new TypeError(`Cannot parse color(${i}). `+(u||"Missing a plugin?"))}else for(let i of B.all){let s=i.getFormat(r);if(s&&s.type==="function"){let o=1;(s.lastAlpha||p0(n.parsed.args).alpha)&&(o=n.parsed.args.pop());let a=n.parsed.args,u;return s.coordGrammar&&(u=Wl(i,s,r,a)),t&&Object.assign(t,{formatId:s.name,types:u}),{spaceId:i.id,coords:a,alpha:o}}}}else for(let r of B.all)for(let i in r.formats){let s=r.formats[i];if(s.type!=="custom"||s.test&&!s.test(n.str))continue;let o=s.parse(n.str);if(o)return o.alpha??=1,t&&(t.formatId=i),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function q(e){if(Array.isArray(e))return e.map(q);if(!e)throw new TypeError("Empty color reference");ii(e)&&(e=E0(e));let t=e.space||e.spaceId;return t instanceof B||(e.space=B.get(t)),e.alpha===void 0&&(e.alpha=1),e}const nE=75e-6;class B{constructor(t){this.id=t.id,this.name=t.name,this.base=t.base?B.get(t.base):null,this.aliases=t.aliases,this.base&&(this.fromBase=t.fromBase,this.toBase=t.toBase);let n=t.coords??this.base.coords;for(let i in n)"name"in n[i]||(n[i].name=i);this.coords=n;let r=t.white??this.base.white??"D65";this.white=ra(r),this.formats=t.formats??{};for(let i in this.formats){let s=this.formats[i];s.type||="function",s.name||=i}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:t.cssId||this.id}),t.gamutSpace?this.gamutSpace=t.gamutSpace==="self"?this:B.get(t.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,s)=>!0),this.referred=t.referred,Object.defineProperty(this,"path",{value:rE(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Qt.run("colorspace-init-end",this)}inGamut(t,{epsilon:n=nE}={}){if(!this.equals(this.gamutSpace))return t=this.to(this.gamutSpace,t),this.gamutSpace.inGamut(t,{epsilon:n});let r=Object.values(this.coords);return t.every((i,s)=>{let o=r[s];if(o.type!=="angle"&&o.range){if(Number.isNaN(i))return!0;let[a,u]=o.range;return(a===void 0||i>=a-n)&&(u===void 0||i<=u+n)}return!0})}get isUnbounded(){return Object.values(this.coords).every(t=>!("range"in t))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let t in this.coords)if(this.coords[t].type==="angle")return!0;return!1}getFormat(t){if(typeof t=="object")return t=ql(t,this),t;let n;return t==="default"?n=Object.values(this.formats)[0]:n=this.formats[t],n?(n=ql(n,this),n):null}equals(t){return t?this===t||this.id===t||this.id===t.id:!1}to(t,n){if(arguments.length===1){const a=q(t);[t,n]=[a.space,a.coords]}if(t=B.get(t),this.equals(t))return n;n=n.map(a=>Number.isNaN(a)?0:a);let r=this.path,i=t.path,s,o;for(let a=0;a<r.length&&r[a].equals(i[a]);a++)s=r[a],o=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${t}: no connection space was found`);for(let a=r.length-1;a>o;a--)n=r[a].toBase(n);for(let a=o+1;a<i.length;a++)n=i[a].fromBase(n);return n}from(t,n){if(arguments.length===1){const r=q(t);[t,n]=[r.space,r.coords]}return t=B.get(t),t.to(this,n)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let t=[];for(let n in this.coords){let r=this.coords[n],i=r.range||r.refRange;t.push(i?.min??0)}return t}static registry={};static get all(){return[...new Set(Object.values(B.registry))]}static register(t,n){if(arguments.length===1&&(n=arguments[0],t=n.id),n=this.get(n),this.registry[t]&&this.registry[t]!==n)throw new Error(`Duplicate color space registration: '${t}'`);if(this.registry[t]=n,arguments.length===1&&n.aliases)for(let r of n.aliases)this.register(r,n);return n}static get(t,...n){if(!t||t instanceof B)return t;if(Jt(t)==="string"){let i=B.registry[t.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${t}"`);return i}if(n.length)return B.get(...n);throw new TypeError(`${t} is not a valid color space`)}static resolveCoord(t,n){let r=Jt(t),i,s;if(r==="string"?t.includes(".")?[i,s]=t.split("."):[i,s]=[,t]:Array.isArray(t)?[i,s]=t:(i=t.space,s=t.coordId),i=B.get(i),i||(i=n),!i)throw new TypeError(`Cannot resolve coordinate reference ${t}: No color space specified and relative references are not allowed here`);if(r=Jt(s),r==="number"||r==="string"&&s>=0){let u=Object.entries(i.coords)[s];if(u)return{space:i,id:u[0],index:s,...u[1]}}i=B.get(i);let o=s.toLowerCase(),a=0;for(let u in i.coords){let l=i.coords[u];if(u.toLowerCase()===o||l.name?.toLowerCase()===o)return{space:i,id:u,index:a,...l};a++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}}function rE(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function ql(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=y0(e.coords);let n=Object.entries(t).map(([r,i],s)=>{let o=e.coordGrammar[s][0],a=i.range||i.refRange,u=o.range,l="";return o=="<percentage>"?(u=[0,100],l="%"):o=="<angle>"&&(l="deg"),{fromRange:a,toRange:u,suffix:l}});e.serializeCoords=(r,i)=>r.map((s,o)=>{let{fromRange:a,toRange:u,suffix:l}=n[o];return a&&u&&(s=Qa(a,u,s)),s=es(s,{precision:i,unit:l}),s})}return e}var ye=new B({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class Ie extends B{constructor(t){t.coords||(t.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),t.base||(t.base=ye),t.toXYZ_M&&t.fromXYZ_M&&(t.toBase??=n=>{let r=ie(t.toXYZ_M,n);return this.white!==this.base.white&&(r=ts(this.white,this.base.white,r)),r},t.fromBase??=n=>(n=ts(this.base.white,this.white,n),ie(t.fromXYZ_M,n))),t.referred??="display",super(t)}}function si(e,t){return e=q(e),!t||e.space.equals(t)?e.coords.slice():(t=B.get(t),t.from(e))}function Ue(e,t){e=q(e);let{space:n,index:r}=B.resolveCoord(t,e.space);return si(e,n)[r]}function eu(e,t,n){return e=q(e),t=B.get(t),e.coords=t.to(e.space,n),e}eu.returns="color";function Nt(e,t,n){if(e=q(e),arguments.length===2&&Jt(arguments[1])==="object"){let r=arguments[1];for(let i in r)Nt(e,i,r[i])}else{typeof n=="function"&&(n=n(Ue(e,t)));let{space:r,index:i}=B.resolveCoord(t,e.space),s=si(e,r);s[i]=n,eu(e,r,s)}return e}Nt.returns="color";var tu=new B({id:"xyz-d50",name:"XYZ D50",white:"D50",base:ye,fromBase:e=>ts(ye.white,"D50",e),toBase:e=>ts("D50",ye.white,e)});const iE=216/24389,jl=24/116,bi=24389/27;let Co=Ce.D50;var We=new B({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Co,base:tu,fromBase(e){let n=e.map((r,i)=>r/Co[i]).map(r=>r>iE?Math.cbrt(r):(bi*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>jl?Math.pow(t[0],3):(116*t[0]-16)/bi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/bi,t[2]>jl?Math.pow(t[2],3):(116*t[2]-16)/bi].map((r,i)=>r*Co[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function wt(e){return(e%360+360)%360}function sE(e,t){if(e==="raw")return t;let[n,r]=t.map(wt),i=r-n;return e==="increasing"?i<0&&(r+=360):e==="decreasing"?i>0&&(n+=360):e==="longer"?-180<i&&i<180&&(i>0?n+=360:r+=360):e==="shorter"&&(i>180?n+=360:i<-180&&(r+=360)),[n,r]}var Or=new B({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:We,fromBase(e){let[t,n,r]=e,i;const s=.02;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),wt(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const zl=25**7,ns=Math.PI,Gl=180/ns,Sn=ns/180;function Kl(e){const t=e*e;return t*t*t*e}function D0(e,t,{kL:n=1,kC:r=1,kH:i=1}={}){[e,t]=q([e,t]);let[s,o,a]=We.from(e),u=Or.from(We,[s,o,a])[1],[l,f,c]=We.from(t),d=Or.from(We,[l,f,c])[1];u<0&&(u=0),d<0&&(d=0);let p=(u+d)/2,b=Kl(p),D=.5*(1-Math.sqrt(b/(b+zl))),$=(1+D)*o,A=(1+D)*f,F=Math.sqrt($**2+a**2),I=Math.sqrt(A**2+c**2),_=$===0&&a===0?0:Math.atan2(a,$),G=A===0&&c===0?0:Math.atan2(c,A);_<0&&(_+=2*ns),G<0&&(G+=2*ns),_*=Gl,G*=Gl;let Ae=l-s,Rt=I-F,ke=G-_,Re=_+G,dt=Math.abs(ke),on;F*I===0?on=0:dt<=180?on=ke:ke>180?on=ke-360:ke<-180?on=ke+360:Ge.warn("the unthinkable has happened");let wu=2*Math.sqrt(I*F)*Math.sin(on*Sn/2),hp=(s+l)/2,Qs=(F+I)/2,bu=Kl(Qs),bt;F*I===0?bt=Re:dt<=180?bt=Re/2:Re<360?bt=(Re+360)/2:bt=(Re-360)/2;let Eu=(hp-50)**2,mp=1+.015*Eu/Math.sqrt(20+Eu),Du=1+.045*Qs,fr=1;fr-=.17*Math.cos((bt-30)*Sn),fr+=.24*Math.cos(2*bt*Sn),fr+=.32*Math.cos((3*bt+6)*Sn),fr-=.2*Math.cos((4*bt-63)*Sn);let vu=1+.015*Qs*fr,pp=30*Math.exp(-1*((bt-275)/25)**2),gp=2*Math.sqrt(bu/(bu+zl)),yp=-1*Math.sin(2*pp*Sn)*gp,fi=(Ae/(n*mp))**2;return fi+=(Rt/(r*Du))**2,fi+=(wu/(i*vu))**2,fi+=yp*(Rt/(r*Du))*(wu/(i*vu)),Math.sqrt(fi)}const oE=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],aE=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],uE=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],lE=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Xn=new B({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:ye,fromBase(e){let n=ie(oE,e).map(r=>Math.cbrt(r));return ie(uE,n)},toBase(e){let n=ie(lE,e).map(r=>r**3);return ie(aE,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ia(e,t){[e,t]=q([e,t]);let[n,r,i]=Xn.from(e),[s,o,a]=Xn.from(t),u=n-s,l=r-o,f=i-a;return Math.sqrt(u**2+l**2+f**2)}const cE=75e-6;function bn(e,t,{epsilon:n=cE}={}){e=q(e),t||(t=e.space),t=B.get(t);let r=e.coords;return t!==e.space&&(r=t.from(e)),t.inGamut(r,{epsilon:n})}function er(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function v0(e,t,n="lab"){n=B.get(n);let r=n.from(e),i=n.from(t);return Math.sqrt(r.reduce((s,o,a)=>{let u=i[a];return isNaN(o)||isNaN(u)?s:s+(u-o)**2},0))}function fE(e,t){return v0(e,t,"lab")}const dE=Math.PI,Zl=dE/180;function hE(e,t,{l:n=2,c:r=1}={}){[e,t]=q([e,t]);let[i,s,o]=We.from(e),[,a,u]=Or.from(We,[i,s,o]),[l,f,c]=We.from(t),d=Or.from(We,[l,f,c])[1];a<0&&(a=0),d<0&&(d=0);let p=i-l,b=a-d,D=s-f,$=o-c,A=D**2+$**2-b**2,F=.511;i>=16&&(F=.040975*i/(1+.01765*i));let I=.0638*a/(1+.0131*a)+.638,_;Number.isNaN(u)&&(u=0),u>=164&&u<=345?_=.56+Math.abs(.2*Math.cos((u+168)*Zl)):_=.36+Math.abs(.4*Math.cos((u+35)*Zl));let G=Math.pow(a,4),Ae=Math.sqrt(G/(G+1900)),Rt=I*(Ae*_+1-Ae),ke=(p/(n*F))**2;return ke+=(b/(r*I))**2,ke+=A/Rt**2,Math.sqrt(ke)}const Yl=203;var nu=new B({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:ye,fromBase(e){return e.map(t=>Math.max(t*Yl,0))},toBase(e){return e.map(t=>Math.max(t/Yl,0))}});const Ei=1.15,Di=.66,Jl=2610/2**14,mE=2**14/2610,Hl=3424/2**12,Ql=2413/2**7,Xl=2392/2**7,pE=1.7*2523/2**5,ec=2**5/(1.7*2523),vi=-.56,ko=16295499532821565e-27,gE=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],yE=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],wE=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],bE=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var A0=new B({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:nu,fromBase(e){let[t,n,r]=e,i=Ei*t-(Ei-1)*r,s=Di*n-(Di-1)*t,a=ie(gE,[i,s,r]).map(function(d){let p=Hl+Ql*(d/1e4)**Jl,b=1+Xl*(d/1e4)**Jl;return(p/b)**pE}),[u,l,f]=ie(wE,a);return[(1+vi)*u/(1+vi*u)-ko,l,f]},toBase(e){let[t,n,r]=e,i=(t+ko)/(1+vi-vi*(t+ko)),o=ie(bE,[i,n,r]).map(function(d){let p=Hl-d**ec,b=Xl*d**ec-Ql;return 1e4*(p/b)**mE}),[a,u,l]=ie(yE,o),f=(a+(Ei-1)*l)/Ei,c=(u+(Di-1)*f)/Di;return[f,c,l]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),sa=new B({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:A0,fromBase(e){let[t,n,r]=e,i;const s=2e-4;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),wt(i)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function EE(e,t){[e,t]=q([e,t]);let[n,r,i]=sa.from(e),[s,o,a]=sa.from(t),u=n-s,l=r-o;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let f=i-a,c=2*Math.sqrt(r*o)*Math.sin(f/2*(Math.PI/180));return Math.sqrt(u**2+l**2+c**2)}const $0=3424/4096,C0=2413/128,k0=2392/128,tc=2610/16384,DE=2523/32,vE=16384/2610,nc=32/2523,AE=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],$E=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],CE=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],kE=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var oa=new B({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:nu,fromBase(e){let t=ie(AE,e);return SE(t)},toBase(e){let t=FE(e);return ie(kE,t)}});function SE(e){let t=e.map(function(n){let r=$0+C0*(n/1e4)**tc,i=1+k0*(n/1e4)**tc;return(r/i)**DE});return ie($E,t)}function FE(e){return ie(CE,e).map(function(r){let i=Math.max(r**nc-$0,0),s=C0-k0*r**nc;return 1e4*(i/s)**vE})}function TE(e,t){[e,t]=q([e,t]);let[n,r,i]=oa.from(e),[s,o,a]=oa.from(t);return 720*Math.sqrt((n-s)**2+.25*(r-o)**2+(i-a)**2)}const ME=Ce.D65,S0=.42,rc=1/S0,So=2*Math.PI,F0=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],NE=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],xE=[[460,451,288],[460,-891,-261],[460,-220,-6300]],BE={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},hn={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},PE=180/Math.PI,ic=Math.PI/180;function T0(e,t){return e.map(r=>{const i=pt(t*Math.abs(r)*.01,S0);return 400*Ms(i,r)/(i+27.13)})}function LE(e,t){const n=100/t*27.13**rc;return e.map(r=>{const i=Math.abs(r);return Ms(n*pt(i/(400-i),rc),r)})}function IE(e){let t=wt(e);t<=hn.h[0]&&(t+=360);const n=b0(hn.h,t)-1,[r,i]=hn.h.slice(n,n+2),[s,o]=hn.e.slice(n,n+2),a=hn.H[n],u=(t-r)/s;return a+100*u/(u+(i-t)/o)}function RE(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[r,i]=hn.h.slice(n,n+2),[s,o]=hn.e.slice(n,n+2);return wt((t*(o*r-s*i)-100*r*o)/(t*(o-s)-100*o))}function M0(e,t,n,r,i){const s={};s.discounting=i,s.refWhite=e,s.surround=r;const o=e.map(D=>D*100);s.la=t,s.yb=n;const a=o[1],u=ie(F0,o);r=BE[s.surround];const l=r[0];s.c=r[1],s.nc=r[2];const c=(1/(5*s.la+1))**4;s.fl=c*s.la+.1*(1-c)*(1-c)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/a,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const d=Math.max(Math.min(l*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=u.map(D=>Rr(1,a/D,d)),s.dRgbInv=s.dRgb.map(D=>1/D);const p=u.map((D,$)=>D*s.dRgb[$]),b=T0(p,s.fl);return s.aW=s.nbb*(2*b[0]+b[1]+.05*b[2]),s}const sc=M0(ME,64/Math.PI*.2,20,"average",!1);function aa(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let n=0;e.h!==void 0?n=wt(e.h)*ic:n=RE(e.H)*ic;const r=Math.cos(n),i=Math.sin(n);let s=0;e.J!==void 0?s=pt(e.J,1/2)*.1:e.Q!==void 0&&(s=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==void 0?o=e.C/s:e.M!==void 0?o=e.M/t.flRoot/s:e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const a=pt(o*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),u=.25*(Math.cos(n+2)+3.8),l=t.aW*pt(s,2/t.c/t.z),f=5e4/13*t.nc*t.ncb*u,c=l/t.nbb,d=23*(c+.305)*Xa(a,23*f+a*(11*r+108*i)),p=d*r,b=d*i,D=LE(ie(xE,[c,p,b]).map($=>$*1/1403),t.fl);return ie(NE,D.map(($,A)=>$*t.dRgbInv[A])).map($=>$/100)}function N0(e,t){const n=e.map(I=>I*100),r=T0(ie(F0,n).map((I,_)=>I*t.dRgb[_]),t.fl),i=r[0]+(-12*r[1]+r[2])/11,s=(r[0]+r[1]-2*r[2])/9,o=(Math.atan2(s,i)%So+So)%So,a=.25*(Math.cos(o+2)+3.8),u=5e4/13*t.nc*t.ncb*Xa(a*Math.sqrt(i**2+s**2),r[0]+r[1]+1.05*r[2]+.305),l=pt(u,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),f=t.nbb*(2*r[0]+r[1]+.05*r[2]),c=pt(f/t.aW,.5*t.c*t.z),d=100*pt(c,2),p=4/t.c*c*(t.aW+4)*t.flRoot,b=l*c,D=b*t.flRoot,$=wt(o*PE),A=IE($),F=50*pt(t.c*l/(t.aW+4),1/2);return{J:d,C:b,h:$,s:F,Q:p,M:D,H:A}}var OE=new B({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:ye,fromBase(e){const t=N0(e,sc);return[t.J,t.M,t.h]},toBase(e){return aa({J:e[0],M:e[1],h:e[2]},sc)}});const _E=Ce.D65,VE=216/24389,x0=24389/27;function UE(e){return 116*(e>VE?Math.cbrt(e):(x0*e+16)/116)-16}function ua(e){return e>8?Math.pow((e+16)/116,3):e/x0}function WE(e,t){let[n,r,i]=e,s=[],o=0;if(i===0)return[0,0,0];let a=ua(i);i>0?o=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:o=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const u=2e-12,l=15;let f=0,c=1/0;for(;f<=l;){s=aa({J:o,C:r,h:n},t);const d=Math.abs(s[1]-a);if(d<c){if(d<=u)return s;c=d}o=o-(s[1]-a)*o/(2*s[1]),f+=1}return aa({J:o,C:r,h:n},t)}function qE(e,t){const n=UE(e[1]);if(n===0)return[0,0,0];const r=N0(e,ru);return[wt(r.h),r.C,n]}const ru=M0(_E,200/Math.PI*ua(50),ua(50)*100,"average",!1);var _r=new B({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:ye,fromBase(e){return qE(e)},toBase(e){return WE(e,ru)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const jE=Math.PI/180,oc=[1,.007,.0228];function ac(e){e[1]<0&&(e=_r.fromBase(_r.toBase(e)));const t=Math.log(Math.max(1+oc[2]*e[1]*ru.flRoot,1))/oc[2],n=e[0]*jE,r=t*Math.cos(n),i=t*Math.sin(n);return[e[2],r,i]}function zE(e,t){[e,t]=q([e,t]);let[n,r,i]=ac(_r.from(e)),[s,o,a]=ac(_r.from(t));return Math.sqrt((n-s)**2+(r-o)**2+(i-a)**2)}var tr={deltaE76:fE,deltaECMC:hE,deltaE2000:D0,deltaEJz:EE,deltaEITP:TE,deltaEOK:ia,deltaEHCT:zE};function GE(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}const uc={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Xt(e,{method:t=Ge.gamut_mapping,space:n=void 0,deltaEMethod:r="",jnd:i=2,blackWhiteClamp:s={}}={}){if(e=q(e),ii(arguments[1])?n=arguments[1]:n||(n=e.space),n=B.get(n),bn(e,n,{epsilon:0}))return e;let o;if(t==="css")o=KE(e,{space:n});else{if(t!=="clip"&&!bn(e,n)){Object.prototype.hasOwnProperty.call(uc,t)&&({method:t,jnd:i,deltaEMethod:r,blackWhiteClamp:s}=uc[t]);let a=D0;if(r!==""){for(let l in tr)if("deltae"+r.toLowerCase()===l.toLowerCase()){a=tr[l];break}}let u=Xt(ne(e,n),{method:"clip",space:n});if(a(e,u)>i){if(Object.keys(s).length===3){let F=B.resolveCoord(s.channel),I=Ue(ne(e,F.space),F.id);if(Ht(I)&&(I=0),I>=s.max)return ne({space:"xyz-d65",coords:Ce.D65},e.space);if(I<=s.min)return ne({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=B.resolveCoord(t),f=l.space,c=l.id,d=ne(e,f);d.coords.forEach((F,I)=>{Ht(F)&&(d.coords[I]=0)});let b=(l.range||l.refRange)[0],D=GE(i),$=b,A=Ue(d,c);for(;A-$>D;){let F=er(d);F=Xt(F,{space:n,method:"clip"}),a(d,F)-i<D?$=Ue(d,c):A=Ue(d,c),Nt(d,c,($+A)/2)}o=ne(d,n)}else o=u}else o=ne(e,n);if(t==="clip"||!bn(o,n,{epsilon:0})){let a=Object.values(n.coords).map(u=>u.range||[]);o.coords=o.coords.map((u,l)=>{let[f,c]=a[l];return f!==void 0&&(u=Math.max(f,u)),c!==void 0&&(u=Math.min(u,c)),u})}}return n!==e.space&&(o=ne(o,e.space)),e.coords=o.coords,e}Xt.returns="color";const lc={WHITE:{space:Xn,coords:[1,0,0]},BLACK:{space:Xn,coords:[0,0,0]}};function KE(e,{space:t}={}){e=q(e),t||(t=e.space),t=B.get(t);const i=B.get("oklch");if(t.isUnbounded)return ne(e,t);const s=ne(e,i);let o=s.coords[0];if(o>=1){const b=ne(lc.WHITE,t);return b.alpha=e.alpha,ne(b,t)}if(o<=0){const b=ne(lc.BLACK,t);return b.alpha=e.alpha,ne(b,t)}if(bn(s,t,{epsilon:0}))return ne(s,t);function a(b){const D=ne(b,t),$=Object.values(t.coords);return D.coords=D.coords.map((A,F)=>{if("range"in $[F]){const[I,_]=$[F].range;return w0(I,A,_)}return A}),D}let u=0,l=s.coords[1],f=!0,c=er(s),d=a(c),p=ia(d,c);if(p<.02)return d;for(;l-u>1e-4;){const b=(u+l)/2;if(c.coords[1]=b,f&&bn(c,t,{epsilon:0}))u=b;else if(d=a(c),p=ia(d,c),p<.02){if(.02-p<1e-4)break;f=!1,u=b}else l=b}return d}function ne(e,t,{inGamut:n}={}){e=q(e),t=B.get(t);let r=t.from(e),i={space:t,coords:r,alpha:e.alpha};return n&&(i=Xt(i,n===!0?void 0:n)),i}ne.returns="color";function Tr(e,{precision:t=Ge.precision,format:n="default",inGamut:r=!0,...i}={}){let s;e=q(e);let o=n;n=e.space.getFormat(n)??e.space.getFormat("default")??B.DEFAULT_FORMAT;let a=e.coords.slice();if(r||=n.toGamut,r&&!bn(e)&&(a=Xt(er(e),r===!0?void 0:r).coords),n.type==="custom")if(i.precision=t,n.serialize)s=n.serialize(a,e.alpha,i);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let u=n.name||"color";n.serializeCoords?a=n.serializeCoords(a,t):t!==null&&(a=a.map(d=>es(d,{precision:t})));let l=[...a];if(u==="color"){let d=n.id||n.ids?.[0]||e.space.id;l.unshift(d)}let f=e.alpha;t!==null&&(f=es(f,{precision:t}));let c=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${f}`;s=`${u}(${l.join(n.commas?", ":" ")}${c})`}return s}const ZE=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],YE=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Ns=new Ie({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:ZE,fromXYZ_M:YE});const Ai=1.09929682680944,cc=.018053968510807;var B0=new Ie({id:"rec2020",name:"REC.2020",base:Ns,toBase(e){return e.map(function(t){return t<cc*4.5?t/4.5:Math.pow((t+Ai-1)/Ai,1/.45)})},fromBase(e){return e.map(function(t){return t>=cc?Ai*Math.pow(t,.45)-(Ai-1):4.5*t})}});const JE=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],HE=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var P0=new Ie({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:JE,fromXYZ_M:HE});const QE=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],me=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var L0=new Ie({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:QE,fromXYZ_M:me}),fc={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let dc=Array(3).fill("<percentage> | <number>[0, 255]"),hc=Array(3).fill("<number>[0, 255]");var nr=new Ie({id:"srgb",name:"sRGB",base:L0,fromBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r>.0031308?n*(1.055*r**(1/2.4)-.055):12.92*t}),toBase:e=>e.map(t=>{let n=t<0?-1:1,r=t*n;return r<=.04045?t/12.92:n*((r+.055)/1.055)**2.4}),formats:{rgb:{coords:dc},rgb_number:{name:"rgb",commas:!0,coords:hc,noAlpha:!0},color:{},rgba:{coords:dc,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:hc},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,n=>{t.push(parseInt(n,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(s=>Math.round(s*255));let r=n&&e.every(s=>s%17===0);return"#"+e.map(s=>r?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=fc.black,t.alpha=0):t.coords=fc[e],t.coords)return t}}}}),I0=new Ie({id:"p3",cssId:"display-p3",name:"P3",base:P0,fromBase:nr.fromBase,toBase:nr.toBase});Ge.display_space=nr;let XE;if(typeof CSS<"u"&&CSS.supports)for(let e of[We,B0,I0]){let t=e.getMinCoords(),r=Tr({space:e,coords:t,alpha:1});if(CSS.supports("color",r)){Ge.display_space=e;break}}function eD(e,{space:t=Ge.display_space,...n}={}){let r=Tr(e,n);if(typeof CSS>"u"||CSS.supports("color",r)||!Ge.display_space)r=new String(r),r.color=e;else{let i=e;if((e.coords.some(Ht)||Ht(e.alpha))&&!(XE??=CSS.supports("color","hsl(none 50% 50%)"))&&(i=er(e),i.coords=i.coords.map(ce),i.alpha=ce(i.alpha),r=Tr(i,n),CSS.supports("color",r)))return r=new String(r),r.color=i,r;i=ne(i,t),r=new String(Tr(i,n)),r.color=i}return r}function tD(e,t){return e=q(e),t=q(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((n,r)=>n===t.coords[r])}function en(e){return Ue(e,[ye,"y"])}function R0(e,t){Nt(e,[ye,"y"],t)}function nD(e){Object.defineProperty(e.prototype,"luminance",{get(){return en(this)},set(t){R0(this,t)}})}var rD=Object.freeze({__proto__:null,getLuminance:en,register:nD,setLuminance:R0});function iD(e,t){e=q(e),t=q(t);let n=Math.max(en(e),0),r=Math.max(en(t),0);return r>n&&([n,r]=[r,n]),(n+.05)/(r+.05)}const sD=.56,oD=.57,aD=.62,uD=.65,mc=.022,lD=1.414,cD=.1,fD=5e-4,dD=1.14,pc=.027,hD=1.14;function gc(e){return e>=mc?e:e+(mc-e)**lD}function Fn(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function mD(e,t){t=q(t),e=q(e);let n,r,i,s,o,a;t=ne(t,"srgb"),[s,o,a]=t.coords;let u=Fn(s)*.2126729+Fn(o)*.7151522+Fn(a)*.072175;e=ne(e,"srgb"),[s,o,a]=e.coords;let l=Fn(s)*.2126729+Fn(o)*.7151522+Fn(a)*.072175,f=gc(u),c=gc(l),d=c>f;return Math.abs(c-f)<fD?r=0:d?(n=c**sD-f**oD,r=n*dD):(n=c**uD-f**aD,r=n*hD),Math.abs(r)<cD?i=0:r>0?i=r-pc:i=r+pc,i*100}function pD(e,t){e=q(e),t=q(t);let n=Math.max(en(e),0),r=Math.max(en(t),0);r>n&&([n,r]=[r,n]);let i=n+r;return i===0?0:(n-r)/i}const gD=5e4;function yD(e,t){e=q(e),t=q(t);let n=Math.max(en(e),0),r=Math.max(en(t),0);return r>n&&([n,r]=[r,n]),r===0?gD:(n-r)/r}function wD(e,t){e=q(e),t=q(t);let n=Ue(e,[We,"l"]),r=Ue(t,[We,"l"]);return Math.abs(n-r)}const bD=216/24389,yc=24/116,$i=24389/27;let Fo=Ce.D65;var la=new B({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Fo,base:ye,fromBase(e){let n=e.map((r,i)=>r/Fo[i]).map(r=>r>bD?Math.cbrt(r):($i*r+16)/116);return[116*n[1]-16,500*(n[0]-n[1]),200*(n[1]-n[2])]},toBase(e){let t=[];return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>yc?Math.pow(t[0],3):(116*t[0]-16)/$i,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/$i,t[2]>yc?Math.pow(t[2],3):(116*t[2]-16)/$i].map((r,i)=>r*Fo[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const To=Math.pow(5,.5)*.5+.5;function ED(e,t){e=q(e),t=q(t);let n=Ue(e,[la,"l"]),r=Ue(t,[la,"l"]),i=Math.abs(Math.pow(n,To)-Math.pow(r,To)),s=Math.pow(i,1/To)*Math.SQRT2-40;return s<7.5?0:s}var Vi=Object.freeze({__proto__:null,contrastAPCA:mD,contrastDeltaPhi:ED,contrastLstar:wD,contrastMichelson:pD,contrastWCAG21:iD,contrastWeber:yD});function DD(e,t,n={}){ii(n)&&(n={algorithm:n});let{algorithm:r,...i}=n;if(!r){let s=Object.keys(Vi).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}e=q(e),t=q(t);for(let s in Vi)if("contrast"+r.toLowerCase()===s.toLowerCase())return Vi[s](e,t,i);throw new TypeError(`Unknown contrast algorithm: ${r}`)}function xs(e){let[t,n,r]=si(e,ye),i=t+15*n+3*r;return[4*t/i,9*n/i]}function O0(e){let[t,n,r]=si(e,ye),i=t+n+r;return[t/i,n/i]}function vD(e){Object.defineProperty(e.prototype,"uv",{get(){return xs(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return O0(this)}})}var AD=Object.freeze({__proto__:null,register:vD,uv:xs,xy:O0});function vr(e,t,n={}){ii(n)&&(n={method:n});let{method:r=Ge.deltaE,...i}=n;for(let s in tr)if("deltae"+r.toLowerCase()===s.toLowerCase())return tr[s](e,t,i);throw new TypeError(`Unknown deltaE method: ${r}`)}function $D(e,t=.25){let r=[B.get("oklch","lch"),"l"];return Nt(e,r,i=>i*(1+t))}function CD(e,t=.25){let r=[B.get("oklch","lch"),"l"];return Nt(e,r,i=>i*(1-t))}var kD=Object.freeze({__proto__:null,darken:CD,lighten:$D});function _0(e,t,n=.5,r={}){return[e,t]=[q(e),q(t)],Jt(n)==="object"&&([n,r]=[.5,n]),oi(e,t,r)(n)}function V0(e,t,n={}){let r;iu(e)&&([r,n]=[e,t],[e,t]=r.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:o=2,maxSteps:a=1e3,...u}=n;r||([e,t]=[q(e),q(t)],r=oi(e,t,u));let l=vr(e,t),f=i>0?Math.max(o,Math.ceil(l/i)+1):o,c=[];if(a!==void 0&&(f=Math.min(f,a)),f===1)c=[{p:.5,color:r(.5)}];else{let d=1/(f-1);c=Array.from({length:f},(p,b)=>{let D=b*d;return{p:D,color:r(D)}})}if(i>0){let d=c.reduce((p,b,D)=>{if(D===0)return 0;let $=vr(b.color,c[D-1].color,s);return Math.max(p,$)},0);for(;d>i;){d=0;for(let p=1;p<c.length&&c.length<a;p++){let b=c[p-1],D=c[p],$=(D.p+b.p)/2,A=r($);d=Math.max(d,vr(A,b.color),vr(A,D.color)),c.splice(p,0,{p:$,color:r($)}),p++}}}return c=c.map(d=>d.color),c}function oi(e,t,n={}){if(iu(e)){let[u,l]=[e,t];return oi(...u.rangeArgs.colors,{...u.rangeArgs.options,...l})}let{space:r,outputSpace:i,progression:s,premultiplied:o}=n;e=q(e),t=q(t),e=er(e),t=er(t);let a={colors:[e,t],options:n};if(r?r=B.get(r):r=B.registry[Ge.interpolationSpace]||e.space,i=i?B.get(i):r,e=ne(e,r),t=ne(t,r),e=Xt(e),t=Xt(t),r.coords.h&&r.coords.h.type==="angle"){let u=n.hue=n.hue||"shorter",l=[r,"h"],[f,c]=[Ue(e,l),Ue(t,l)];isNaN(f)&&!isNaN(c)?f=c:isNaN(c)&&!isNaN(f)&&(c=f),[f,c]=sE(u,[f,c]),Nt(e,l,f),Nt(t,l,c)}return o&&(e.coords=e.coords.map(u=>u*e.alpha),t.coords=t.coords.map(u=>u*t.alpha)),Object.assign(u=>{u=s?s(u):u;let l=e.coords.map((d,p)=>{let b=t.coords[p];return Rr(d,b,u)}),f=Rr(e.alpha,t.alpha,u),c={space:r,coords:l,alpha:f};return o&&(c.coords=c.coords.map(d=>d/f)),i!==r&&(c=ne(c,i)),c},{rangeArgs:a})}function iu(e){return Jt(e)==="function"&&!!e.rangeArgs}Ge.interpolationSpace="lab";function SD(e){e.defineFunction("mix",_0,{returns:"color"}),e.defineFunction("range",oi,{returns:"function<color>"}),e.defineFunction("steps",V0,{returns:"array<color>"})}var FD=Object.freeze({__proto__:null,isRange:iu,mix:_0,range:oi,register:SD,steps:V0}),U0=new B({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:nr,fromBase:e=>{let t=Math.max(...e),n=Math.min(...e),[r,i,s]=e,[o,a,u]=[NaN,0,(n+t)/2],l=t-n;if(l!==0){switch(a=u===0||u===1?0:(t-u)/Math.min(u,1-u),t){case r:o=(i-s)/l+(i<s?6:0);break;case i:o=(s-r)/l+2;break;case s:o=(r-i)/l+4}o=o*60}return a<0&&(o+=180,a=Math.abs(a)),o>=360&&(o-=360),[o,a*100,u*100]},toBase:e=>{let[t,n,r]=e;t=t%360,t<0&&(t+=360),n/=100,r/=100;function i(s){let o=(s+t/30)%12,a=n*Math.min(r,1-r);return r-a*Math.max(-1,Math.min(o-3,9-o,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),W0=new B({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:U0,fromBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r+n*Math.min(r,1-r);return[t,i===0?0:200*(1-r/i),100*i]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=r*(1-n/2);return[t,i===0||i===1?0:(r-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),TD=new B({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:W0,fromBase(e){let[t,n,r]=e;return[t,r*(100-n)/100,100-r]},toBase(e){let[t,n,r]=e;n/=100,r/=100;let i=n+r;if(i>=1){let a=n/i;return[t,0,a*100]}let s=1-r,o=s===0?0:1-n/s;return[t,o*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const MD=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],ND=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var q0=new Ie({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:MD,fromXYZ_M:ND}),xD=new Ie({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:q0,toBase:e=>e.map(t=>Math.pow(Math.abs(t),563/256)*Math.sign(t)),fromBase:e=>e.map(t=>Math.pow(Math.abs(t),256/563)*Math.sign(t))});const BD=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],PD=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var j0=new Ie({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:tu,toXYZ_M:BD,fromXYZ_M:PD});const LD=1/512,ID=16/512;var RD=new Ie({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:j0,toBase(e){return e.map(t=>t<ID?t/16:t**1.8)},fromBase(e){return e.map(t=>t>=LD?t**(1/1.8):16*t)}}),OD=new B({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Xn,fromBase(e){let[t,n,r]=e,i;const s=2e-4;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),wt(i)]},toBase(e){let[t,n,r]=e,i,s;return isNaN(r)?(i=0,s=0):(i=n*Math.cos(r*Math.PI/180),s=n*Math.sin(r*Math.PI/180)),[t,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let z0=Ce.D65;const _D=216/24389,wc=24389/27,[bc,Ec]=xs({space:ye,coords:z0});var G0=new B({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:z0,base:ye,fromBase(e){let t=[ce(e[0]),ce(e[1]),ce(e[2])],n=t[1],[r,i]=xs({space:ye,coords:t});if(!Number.isFinite(r)||!Number.isFinite(i))return[0,0,0];let s=n<=_D?wc*n:116*Math.cbrt(n)-16;return[s,13*s*(r-bc),13*s*(i-Ec)]},toBase(e){let[t,n,r]=e;if(t===0||Ht(t))return[0,0,0];n=ce(n),r=ce(r);let i=n/(13*t)+bc,s=r/(13*t)+Ec,o=t<=8?t/wc:Math.pow((t+16)/116,3);return[o*(9*i/(4*s)),o,o*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),su=new B({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:G0,fromBase(e){let[t,n,r]=e,i;const s=.02;return Math.abs(n)<s&&Math.abs(r)<s?i=NaN:i=Math.atan2(r,n)*180/Math.PI,[t,Math.sqrt(n**2+r**2),wt(i)]},toBase(e){let[t,n,r]=e;return n<0&&(n=0),isNaN(r)&&(r=0),[t,n*Math.cos(r*Math.PI/180),n*Math.sin(r*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const VD=216/24389,UD=24389/27,Dc=me[0][0],vc=me[0][1],Mo=me[0][2],Ac=me[1][0],$c=me[1][1],No=me[1][2],Cc=me[2][0],kc=me[2][1],xo=me[2][2];function Tn(e,t,n){const r=t/(Math.sin(n)-e*Math.cos(n));return r<0?1/0:r}function rs(e){const t=Math.pow(e+16,3)/1560896,n=t>VD?t:e/UD,r=n*(284517*Dc-94839*Mo),i=n*(838422*Mo+769860*vc+731718*Dc),s=n*(632260*Mo-126452*vc),o=n*(284517*Ac-94839*No),a=n*(838422*No+769860*$c+731718*Ac),u=n*(632260*No-126452*$c),l=n*(284517*Cc-94839*xo),f=n*(838422*xo+769860*kc+731718*Cc),c=n*(632260*xo-126452*kc);return{r0s:r/s,r0i:i*e/s,r1s:r/(s+126452),r1i:(i-769860)*e/(s+126452),g0s:o/u,g0i:a*e/u,g1s:o/(u+126452),g1i:(a-769860)*e/(u+126452),b0s:l/c,b0i:f*e/c,b1s:l/(c+126452),b1i:(f-769860)*e/(c+126452)}}function Sc(e,t){const n=t/360*Math.PI*2,r=Tn(e.r0s,e.r0i,n),i=Tn(e.r1s,e.r1i,n),s=Tn(e.g0s,e.g0i,n),o=Tn(e.g1s,e.g1i,n),a=Tn(e.b0s,e.b0i,n),u=Tn(e.b1s,e.b1i,n);return Math.min(r,i,s,o,a,u)}var WD=new B({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:su,gamutSpace:nr,fromBase(e){let[t,n,r]=[ce(e[0]),ce(e[1]),ce(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=rs(t),o=Sc(s,r);i=n/o*100}return[r,i,t]},toBase(e){let[t,n,r]=[ce(e[0]),ce(e[1]),ce(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let s=rs(r);i=Sc(s,t)/100*n}return[r,i,t]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});me[0][0];me[0][1];me[0][2];me[1][0];me[1][1];me[1][2];me[2][0];me[2][1];me[2][2];function Mn(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Fc(e){let t=Mn(e.r0s,e.r0i),n=Mn(e.r1s,e.r1i),r=Mn(e.g0s,e.g0i),i=Mn(e.g1s,e.g1i),s=Mn(e.b0s,e.b0i),o=Mn(e.b1s,e.b1i);return Math.min(t,n,r,i,s,o)}var qD=new B({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:su,gamutSpace:"self",fromBase(e){let[t,n,r]=[ce(e[0]),ce(e[1]),ce(e[2])],i;if(t>99.9999999)i=0,t=100;else if(t<1e-8)i=0,t=0;else{let s=rs(t),o=Fc(s);i=n/o*100}return[r,i,t]},toBase(e){let[t,n,r]=[ce(e[0]),ce(e[1]),ce(e[2])],i;if(r>99.9999999)r=100,i=0;else if(r<1e-8)r=0,i=0;else{let s=rs(r);i=Fc(s)/100*n}return[r,i,t]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Tc=203,Mc=2610/2**14,jD=2**14/2610,zD=2523/2**5,Nc=2**5/2523,xc=3424/2**12,Bc=2413/2**7,Pc=2392/2**7;var GD=new Ie({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Ns,toBase(e){return e.map(function(t){return(Math.max(t**Nc-xc,0)/(Bc-Pc*t**Nc))**jD*1e4/Tc})},fromBase(e){return e.map(function(t){let n=Math.max(t*Tc/1e4,0),r=xc+Bc*n**Mc,i=1+Pc*n**Mc;return(r/i)**zD})}});const Lc=.17883277,Ic=.28466892,Rc=.55991073,Bo=3.7743;var KD=new Ie({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ns,toBase(e){return e.map(function(t){return t<=.5?t**2/3*Bo:(Math.exp((t-Rc)/Lc)+Ic)/12*Bo})},fromBase(e){return e.map(function(t){return t/=Bo,t<=1/12?Math.sqrt(3*t):Lc*Math.log(12*t-Ic)+Rc})}});const K0={};Qt.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=Z0(e.W1,e.W2,e.options.method))});Qt.add("chromatic-adaptation-end",e=>{e.M||(e.M=Z0(e.W1,e.W2,e.options.method))});function Bs({id:e,toCone_M:t,fromCone_M:n}){K0[e]=arguments[0]}function Z0(e,t,n="Bradford"){let r=K0[n],[i,s,o]=ie(r.toCone_M,e),[a,u,l]=ie(r.toCone_M,t),f=[[a/i,0,0],[0,u/s,0],[0,0,l/o]],c=ie(f,r.toCone_M);return ie(r.fromCone_M,c)}Bs({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Bs({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Bs({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Bs({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(Ce,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});Ce.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const ZD=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],YD=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var Y0=new Ie({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ce.ACES,toXYZ_M:ZD,fromXYZ_M:YD});const Ci=2**-16,Po=-.35828683,ki=(Math.log2(65504)+9.72)/17.52;var JD=new Ie({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Po,ki],name:"Red"},g:{range:[Po,ki],name:"Green"},b:{range:[Po,ki],name:"Blue"}},referred:"scene",base:Y0,toBase(e){const t=-.3013698630136986;return e.map(function(n){return n<=t?(2**(n*17.52-9.72)-Ci)*2:n<ki?2**(n*17.52-9.72):65504})},fromBase(e){return e.map(function(t){return t<=0?(Math.log2(Ci)+9.72)/17.52:t<Ci?(Math.log2(Ci+t*.5)+9.72)/17.52:(Math.log2(t)+9.72)/17.52})}}),Oc=Object.freeze({__proto__:null,A98RGB:xD,A98RGB_Linear:q0,ACEScc:JD,ACEScg:Y0,CAM16_JMh:OE,HCT:_r,HPLuv:qD,HSL:U0,HSLuv:WD,HSV:W0,HWB:TD,ICTCP:oa,JzCzHz:sa,Jzazbz:A0,LCH:Or,LCHuv:su,Lab:We,Lab_D65:la,Luv:G0,OKLCH:OD,OKLab:Xn,P3:I0,P3_Linear:P0,ProPhoto:RD,ProPhoto_Linear:j0,REC_2020:B0,REC_2020_Linear:Ns,REC_2100_HLG:KD,REC_2100_PQ:GD,XYZ_ABS_D65:nu,XYZ_D50:tu,XYZ_D65:ye,sRGB:nr,sRGB_Linear:L0});let X=class Fe{constructor(...t){let n;t.length===1&&(n=q(t[0]));let r,i,s;n?(r=n.space||n.spaceId,i=n.coords,s=n.alpha):[r,i,s]=t,Object.defineProperty(this,"space",{value:B.get(r),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get spaceId(){return this.space.id}clone(){return new Fe(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let n=eD(this,...t);return n.color=new Fe(n.color),n}static get(t,...n){return t instanceof Fe?t:new Fe(t,...n)}static defineFunction(t,n,r=n){let{instance:i=!0,returns:s}=r,o=function(...a){let u=n(...a);if(s==="color")u=Fe.get(u);else if(s==="function<color>"){let l=u;u=function(...f){let c=l(...f);return Fe.get(c)},Object.assign(u,l)}else s==="array<color>"&&(u=u.map(l=>Fe.get(l)));return u};t in Fe||(Fe[t]=o),i&&(Fe.prototype[t]=function(...a){return o(this,...a)})}static defineFunctions(t){for(let n in t)Fe.defineFunction(n,t[n],t[n])}static extend(t){if(t.register)t.register(Fe);else for(let n in t)Fe.defineFunction(n,t[n])}};X.defineFunctions({get:Ue,getAll:si,set:Nt,setAll:eu,to:ne,equals:tD,inGamut:bn,toGamut:Xt,distance:v0,toString:Tr});Object.assign(X,{util:Xb,hooks:Qt,WHITES:Ce,Space:B,spaces:B.registry,parse:E0,defaults:Ge});for(let e of Object.keys(Oc))B.register(Oc[e]);for(let e in B.registry)ca(e,B.registry[e]);Qt.add("colorspace-init-end",e=>{ca(e.id,e),e.aliases?.forEach(t=>{ca(t,e)})});function ca(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(X.prototype,n,{get(){let r=this.getAll(e);return typeof Proxy>"u"?r:new Proxy(r,{has:(i,s)=>{try{return B.resolveCoord([t,s]),!0}catch{}return Reflect.has(i,s)},get:(i,s,o)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:a}=B.resolveCoord([t,s]);if(a>=0)return i[a]}return Reflect.get(i,s,o)},set:(i,s,o,a)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:u}=B.resolveCoord([t,s]);if(u>=0)return i[u]=o,this.setAll(e,i),!0}return Reflect.set(i,s,o,a)}})},set(r){this.setAll(e,r)},configurable:!0,enumerable:!0})}X.extend(tr);X.extend({deltaE:vr});Object.assign(X,{deltaEMethods:tr});X.extend(kD);X.extend({contrast:DD});X.extend(AD);X.extend(rD);X.extend(FD);X.extend(Vi);const HD=Symbol("no update");class Lo extends fh()("observable-value-update"){}class QD extends dh("observable-destroy"){}class XD{listenTarget=new t0;value;equalityCheck;listenerMap=new WeakMap;dispatch(...t){return this.listenTarget.dispatch(...t)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(...t){const n=t[0];return n===HD||(t.length===2?t[1]:this.equalityCheck)?.(this.value,n)?!1:(this.value=n,this.listenTarget.dispatch(new Lo({detail:n})),!0)}listen(t,n){const r=i=>n(i.detail);return this.listenerMap.set(n,r),t&&n(this.value),this.listenTarget.listen(Lo,r)}removeListener(t){const n=this.listenerMap.get(t);return!!n&&this.listenTarget.removeListener(Lo,n)}destroy(){this.listenTarget.dispatch(new QD),this.listenTarget.destroy()}listenToEvent(t,n,r){return this.listenTarget.listen(t,n,r)}}function e5(e,t){return aw(e,t,(n,r)=>w.isFunction(n)&&w.isFunction(r)?!0:w.strictEquals(n,r))}const J0="__vir__shape__definition__key__do__not__use__in__actual__objects";function t5(e){return w.hasKey(e,J0)}var ge;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional"})(ge||(ge={}));const H0="__vir__shape__specifier__key__do__not__use__in__actual__objects";function n5(...e){return lr(e,ge.And)}function r5(...e){return lr(e,ge.Enum)}function W(...e){return lr(e,ge.Exact)}function Q0(...e){return lr(e,ge.IndexedKeys)}function Vt(...e){return lr(e,ge.Or)}function Vn(e,t){return lr([e,t],ge.NumericRange)}function X0(e){return xt(e,ge.And)}function em(e){return xt(e,ge.Class)}function tm(e){return xt(e,ge.Enum)}function nm(e){return xt(e,ge.Exact)}function rm(e){return xt(e,ge.IndexedKeys)}function im(e){return xt(e,ge.Or)}function sm(e){return xt(e,ge.Unknown)}function i5(e){return xt(e,ge.NumericRange)}function s5(e){return xt(e,ge.Optional)}function xt(e,t){const n=ou(e);return!!n&&n.specifierType===t}function lr(e,t){return{[H0]:!0,specifierType:t,parts:e}}function om(e){const t=e.parts[0].keys,n=ou(t);if(w.isPropertyKey(t))return!0;if(n){if(em(n))return!1;if(X0(n))return!1;if(im(n)){const r=n.parts.map(i=>om(Q0({...e.parts[0],keys:i})));return r.includes(!1)?!1:r.flat().filter(w.isPropertyKey)}else if(nm(n)){const r=n.parts.filter(w.isPropertyKey);return r.length!==n.parts.length?!1:r}else{if(tm(n))return Object.values(n.parts[0]);if(rm(n))return!1;if(sm(n))return!0}}return!1}function ou(e){if(w.isObject(e)&&w.hasKey(e,H0)){if(!w.hasKey(e,"parts")||!w.isArray(e.parts))throw new Error("Found a shape specifier but its parts are not valid.");if(!w.hasKey(e,"specifierType")||!w.isEnumValue(e.specifierType,ge))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}let _c=class extends TypeError{name="DefaultValueConstructionError"};const am="__vir__literal__specifier__key__do__not__use__in__actual__objects";function o5(e){return w.hasKey(e,am)}function a5(e,t){return{checker:t,defaultValue:e,[am]:!0}}function fa(e){return Pn(e)}function Pn(e){const t=ou(e);if(o5(e))return e.defaultValue;if(t){if(s5(t))return Pn(t.parts[0]);if(i5(t))return t.parts[0];if(em(t)){const n=t.parts[0];try{return new n}catch(r){throw new _c(`Failed to create default value for classShape for class '${n.name}': ${ve(r)}`)}}else{if(im(t)||nm(t))return Pn(t.parts[0]);if(X0(t))return t.parts.reduce((n,r)=>Object.assign(n,Pn(r)),{});if(tm(t))return t.parts[1]||Object.values(t.parts[0])[0];if(rm(t)){const n=om(t);return!t.parts[0].required||w.isBoolean(n)?{}:Object.fromEntries(n.map(r=>[r,Pn(t.parts[0].values)]))}else{if(sm(t))return t.parts[0]??{};throw new _c(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return t5(e)?fa(e.shape):e instanceof RegExp?e:w.isArray(e)?e.map(Pn):w.isObject(e)?pe(e,(n,r)=>fa(r)):e}function cr(e,t=!1){const n={shape:e,isReadonly:t,get defaultValue(){return fa(e)},[J0]:!0};return Object.defineProperty(n,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}a5("00000000-0000-0000-0000-000000000000",w.isUuid);const u5=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],um=u5.reduce((e,t)=>(e[t]=t,e),{});te.defaultZone.name;const lm=um.UTC,l5=cr({hour:Vn(rl.min,rl.max),minute:Vn(il.min,il.max),second:Vn(sl.min,sl.max),millisecond:Vn(ol.min,ol.max),timezone:r5(um,lm)}),c5=cr({year:2023,month:Vn(tl.min,tl.max),day:Vn(nl.min,nl.max),timezone:lm});cr(n5(c5,l5));R.Years+"",R.Quarters+"",R.Months+"",R.Weeks+"",R.Days+"",R.Hours+"",R.Minutes+"",R.Seconds+"",R.Milliseconds+"";cr(Vt({get:W(L.Month),in:Vt(W(L.Year),W(L.Quarter))},{get:W(L.Week),in:Vt(W(L.Year),W(L.Quarter),W(L.Month))},{get:W(L.Day),in:Vt(W(L.Year),W(L.Quarter),W(L.Month),W(L.Week))},{get:W(L.Hour),in:Vt(W(L.Year),W(L.Quarter),W(L.Month),W(L.Week),W(L.Day))},{get:W(L.Minute),in:Vt(W(L.Year),W(L.Quarter),W(L.Month),W(L.Week),W(L.Day),W(L.Hour))},{get:W(L.Second),in:Vt(W(L.Year),W(L.Quarter),W(L.Month),W(L.Week),W(L.Day),W(L.Hour),W(L.Minute))},{get:W(L.Millisecond),in:Vt(W(L.Year),W(L.Quarter),W(L.Month),W(L.Week),W(L.Day),W(L.Hour),W(L.Minute),W(L.Second))}));var Vc;(function(e){e.Date="date",e.Time="time",e.DateTime="datetime-local"})(Vc||(Vc={}));var da;(function(e){e.Hour="hour",e.Minute="minute",e.Second="second",e.Millisecond="millisecond"})(da||(da={}));var Uc;(function(e){e.Year="year",e.Month="month",e.Day="day"})(Uc||(Uc={}));const f5={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Vw(f5,$t(da));te.defaultLocale;function d5(e,t){const n=t?.constructor,r=e?.constructor?.prototype,i=e?.constructor===n,s=n&&r?r instanceof n:!1;return typeof e==typeof t&&(i||s)}const cm="__vir__shape__definition__key__do__not__use__in__actual__objects";function fm(e){return w.hasKey(e,cm)}var Pe;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional"})(Pe||(Pe={}));const dm="__vir__shape__specifier__key__do__not__use__in__actual__objects";function h5(...e){return mm(e,Pe.IndexedKeys)}function m5(e){return mm([e],Pe.Unknown)}function Ps(e){return Bt(e,Pe.And)}function Ls(e){return Bt(e,Pe.Class)}function Is(e){return Bt(e,Pe.Enum)}function Rs(e){return Bt(e,Pe.Exact)}function Os(e){return Bt(e,Pe.IndexedKeys)}function ai(e){return Bt(e,Pe.Or)}function _s(e){return Bt(e,Pe.Unknown)}function hm(e){return Bt(e,Pe.NumericRange)}function is(e){return Bt(e,Pe.Optional)}function Bt(e,t){const n=ui(e);return!!n&&n.specifierType===t}function mm(e,t){return{[dm]:!0,specifierType:t,parts:e}}function gn(e,t,n,r){const i=ui(t);if(i){if(hm(i))return w.isNumber(e)?e>=i.parts[0]&&e<=i.parts[1]:!1;if(Ls(i))return e instanceof i.parts[0];if(Ps(i))return i.parts.every(s=>gn(e,s));if(ai(i))return i.parts.some(s=>gn(e,s));if(Rs(i))return w.isObject(e)?gn(e,i.parts[0]):e===i.parts[0];if(Is(i))return w.hasValue(Object.values(i.parts[0]),e);if(Os(i))return w.isObject(e)?p5(e,i,!!n)&&ch(e).every(s=>gn(s,i.parts[0].values)):!1;if(_s(i))return!0}return r?t===e:d5(e,t)}function p5(e,t,n){const r=t.parts[0].required,i=t.parts[0].keys;if(n)if(r){const s=au(t);return w.isBoolean(s)?s:s.every(o=>J(e).some(a=>gn(a,o,!1,!0)))}else return!0;else return J(e).every(s=>gn(s,i))}function au(e){const t=e.parts[0].keys,n=ui(t);if(w.isPropertyKey(t))return!0;if(n){if(Ls(n))return!1;if(Ps(n))return!1;if(ai(n)){const r=n.parts.map(i=>au(h5({...e.parts[0],keys:i})));return r.includes(!1)?!1:r.flat().filter(w.isPropertyKey)}else if(Rs(n)){const r=n.parts.filter(w.isPropertyKey);return r.length!==n.parts.length?!1:r}else{if(Is(n))return Object.values(n.parts[0]);if(Os(n))return!1;if(_s(n))return!0}}return!1}function ui(e){if(w.isObject(e)&&w.hasKey(e,dm)){if(!w.hasKey(e,"parts")||!w.isArray(e.parts))throw new Error("Found a shape specifier but its parts are not valid.");if(!w.hasKey(e,"specifierType")||!w.isEnumValue(e.specifierType,Pe))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}let Wc=class extends TypeError{name="DefaultValueConstructionError"};function ha(e){return Ln(e)}function Ln(e){const t=ui(e);if(t){if(is(t))return Ln(t.parts[0]);if(hm(t))return t.parts[0];if(Ls(t)){const n=t.parts[0];try{return new n}catch(r){throw new Wc(`Failed to create default value for classShape for class '${n.name}': ${ve(r)}`)}}else{if(ai(t)||Rs(t))return Ln(t.parts[0]);if(Ps(t))return t.parts.reduce((n,r)=>Object.assign(n,Ln(r)),{});if(Is(t))return Object.values(t.parts[0])[0];if(Os(t)){const n=au(t);return!t.parts[0].required||w.isBoolean(n)?{}:Object.fromEntries(n.map(r=>[r,Ln(t.parts[0].values)]))}else{if(_s(t))return t.parts[0]??{};throw new Wc(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return fm(e)?ha(e.shape):e instanceof RegExp?e:w.isArray(e)?e.map(Ln):w.isObject(e)?pe(e,(n,r)=>ha(r)):e}function g5(e,t=!1){const n={shape:e,isReadonly:t,get defaultValue(){return ha(e)},[cm]:!0};return Object.defineProperty(n,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}let Ze=class extends TypeError{name="ShapeMismatchError"};function y5(e,t,n={}){try{return w5(e,t,n),!0}catch{return!1}}function w5(e,t,n={},r=""){try{ht({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?Jr(i,r):i}}function ma(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function ht({subject:e,shape:t,keys:n,options:r}){if(_s(t))return!0;if(fm(t))return ht({subject:e,shape:t.shape,keys:n,options:r});const i=ma(n);if(ui(e))throw new Ze(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(is(t))return ht({keys:n,options:r,shape:t.parts[0],subject:e});if(gn(e,t,!r.ignoreExtraKeys)){if(w.isFunction(t))return w.isFunction(e);if(Ls(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(f=>[f,!1])),u=[];let l=!1;if(ai(t)){const f=[];l=t.parts.some(c=>{try{const d=ht({subject:e,shape:c,keys:n,options:r});return Object.assign(a,d),!0}catch(d){if(d instanceof Ze)return f.push(d.message),!1;throw d}}),!l&&w.isLengthAtLeast(f,1)&&u.push(f[0])}else if(Ps(t))l=t.parts.every(f=>{try{const c=ht({subject:e,shape:f,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(a,c),!0}catch(c){if(c instanceof Ze)return u.push(c.message),!1;throw c}});else if(Rs(t)){const f=ht({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(a,f),l=!0}else{if(Is(t))throw new Ze(`Cannot compare an enum specifier to an object at ${i}`);if(w.isArray(t)&&w.isArray(o))l=o.every((f,c)=>{const d=t.some(p=>{try{return ht({subject:f,shape:p,keys:[...n,c],options:r}),!0}catch(b){if(b instanceof Ze)return u.push(b.message),!1;throw b}});return a[c]=d,d});else if(Os(t)){const f=pe(e,(c,d)=>(r.ignoreExtraKeys||ht({shape:t.parts[0].keys,subject:c,keys:[...n,c],options:r}),ht({shape:t.parts[0].values,subject:d,keys:[...n,c],options:r}),!0));Object.assign(a,f),l=!0}else{const f=b5({keys:n,options:r,shape:t,subject:e});Object.assign(a,f),l=!0}}if(u.length)throw new Ze(Yr(u));if(!l){const c=`Failed on key(s): ${Object.keys(a).filter(d=>!a[d]).map(d=>ma([...n,d])).join(",")}`;throw new Ze(c)}return r.ignoreExtraKeys||Object.entries(a).forEach(([f,c])=>{if(!c)throw new Ze(`subject as extra key '${f}' in ${i}.`)}),a}else if(r.exactValues)return e===t}else throw new Ze(`Subject does not match shape definition at key ${i}`);return!0}function b5({keys:e,options:t,shape:n,subject:r}){const i=ma(e),s={};if(w.isObject(n)){const o=new Set(J(n)),a=new Set(J(r));o.forEach(u=>{(u in r||is(n[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new Ze(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=n[u],f=ai(l)?l.parts.includes(void 0):!1,c=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!f&&!c)throw new Ze(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in r)&&is(n[u])){s[u]=!0;return}const l=r[u];if(t.ignoreExtraKeys&&!o.has(u))return;const f=n[u];ht({subject:l,shape:f,keys:[...e,u],options:t}),s[u]=!0})}else throw new Ze(`Shape definition at ${i} was not an object.`);return s}const E5=g5({listen(e,t){return()=>!1},destroy(){},removeListener(e){return!1},value:m5()});function Io(e){return y5(e,E5,{allowExtraKeys:!0})}class pm extends XD{value;equalityCheck;constructor(t){super(),this.value=t.defaultValue,this.equalityCheck=t.equalityCheck||e5}setValue(t){return super.setValue(t)}listen(t,n){return super.listen(t,n)}removeListener(t){return super.removeListener(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:D5}=zb,qc=()=>document.createComment(""),wr=(e,t,n)=>{const r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){const s=r.insertBefore(qc(),i),o=r.insertBefore(qc(),i);n=new D5(s,o,e,e.options)}else{const s=n._$AB.nextSibling,o=n._$AM,a=o!==e;if(a){let u;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(u=e._$AU)!==o._$AU&&n._$AP(u)}if(s!==i||a){let u=n._$AA;for(;u!==s;){const l=u.nextSibling;r.insertBefore(u,i),u=l}}}return n},fn=(e,t,n=e)=>(e._$AI(t,n),e),v5={},A5=(e,t=v5)=>e._$AH=t,$5=e=>e._$AH,Ro=e=>{e._$AP?.(!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const r=t.nextSibling;t.remove(),t=r}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vs={ATTRIBUTE:1,CHILD:2,ELEMENT:6},rn=e=>(...t)=>({_$litDirective$:e,values:t});class Pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C5={attribute:!0,type:String,converter:Qi,reflect:!1,hasChanged:Ya},k5=(e=C5,t,n)=>{const{kind:r,metadata:i}=n;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(n.name,e),r==="accessor"){const{name:o}=n;return{set(a){const u=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,u,e)},init(a){return a!==void 0&&this.P(o,void 0,e),a}}}if(r==="setter"){const{name:o}=n;return function(a){const u=this[o];t.call(this,a),this.requestUpdate(o,u,e)}}throw Error("Unsupported decorator location: "+r)};function S5(e){return(t,n)=>typeof n=="object"?k5(e,t,n):((r,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,n)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vr=rn(class extends Pt{constructor(e){if(super(e),e.type!==Vs.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const i=!!t[r];i===this.st.has(r)||this.nt?.has(r)||(i?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return ze}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gm=e=>e??re;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pa extends Pt{constructor(t){if(super(t),this.it=re,t.type!==Vs.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===re||t==null)return this._t=void 0,this.it=t;if(t===ze)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}}pa.directiveName="unsafeHTML",pa.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class jc extends pa{}jc.directiveName="unsafeSVG",jc.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F5(e,t,n){return e?t(e):n?.(e)}class ym extends Fr{static assign;static assignedInputs;static tagName;static styles;static render;static inputsType;static stateType;static updateStateType;static events;static stateInitStatic;static init;static elementOptions;static hostClasses;static cssVars;static slotNames}function T5(e,t,n){const r=!t.length&&!n.length,i=e.length?!1:!t.filter(a=>!!a.index).length;if(r||i)return[...e];const s=e.map(a=>[a]);return s.length||(s[0]=[]),n.forEach(a=>{a>=0&&a<e.length&&(s[a]=[])}),t.forEach(a=>{const u=s[a.index];u&&u.splice(0,0,...a.values)}),s.flat()}function Ui(e){return w.hasKey(e,"_elementVirIsMinimalDefinitionWithInputs")&&!!e._elementVirIsMinimalDefinitionWithInputs}function uu(e){return w.hasKey(e,"tagName")&&!!e.tagName&&typeof e.tagName=="string"}function wm(e){return bs(e,t=>{if(Ui(t))return t.definition;if(uu(t))return t.tagInterpolationKey||t},w.isTruthy)}const bm=new WeakMap;function M5(e,t){const n=wm(t);return Em(bm,[e,...n]).value?.template}function N5(e,t,n){const r=wm(t);return vm(bm,[e,...r],n)}function Em(e,t,n=0){const{currentTemplateAndNested:r,reason:i}=Dm(e,t,n);return r?n===t.length-1?{value:r,reason:"reached end of keys array"}:r.nested?Em(r.nested,t,n+1):{value:void 0,reason:`map at key index ${n} did not have nested maps`}:{value:r,reason:i}}function Dm(e,t,n){const r=t[n];if(r==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${n} not found`};if(!e.has(r))return{currentKey:r,currentTemplateAndNested:void 0,reason:`key at index ${n} was not in the map`};const i=e.get(r);return i==null?{currentKey:r,currentTemplateAndNested:void 0,reason:`value at key at index ${n} was undefined`}:{currentKey:r,currentTemplateAndNested:i,reason:"key and value exists"}}function vm(e,t,n,r=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=Dm(e,t,r);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||e.set(s,a),r===t.length-1)return a.template=n,{result:!0,reason:"set value at end of keys array"};const u=a.nested??new WeakMap;return a.nested||(a.nested=u),vm(u,t,n,r+1)}function Am(e,t,n){const r=M5(e,t),i=r??n();if(!r){const a=N5(e,t,i);if(!a.result)throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(t),o=T5(t,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function $m(e,t,n,r){const i=[],s=[],o=[],a=[];return e.forEach((l,f)=>{const c=i.length-1,d=i[c],p=f-1,b=t[p];r&&r(l);let D,$=[];if(typeof d=="string"&&(D=n(d,l,b),D)){i[c]=[d,D.replacement].join(""),o.push(p);const F=D.getExtraValues;$=F?F(b):[],$.length&&F?(i[c]+=" ",$.forEach((I,_)=>{_&&i.push(" ")}),a.push(I=>{const _=I[p],G=F(_);return{index:p,values:G}}),i.push(l)):i[c]+=l}D||i.push(l);const A=e.raw[f];D?(s[c]=[s[c],D.replacement,A].join(""),$.length&&$.forEach(()=>{s.push("")})):s.push(A)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(l){const f=a.flatMap(c=>c(l));return{valueIndexDeletions:o,valueInsertions:f}}}}function x5(...[e,t,n]){if(uu(n))return{replacement:n.tagName,getExtraValues:void 0}}function B5(e,t){return $m(e,t,x5)}function S(e,...t){const n=Am(e,t,()=>B5(e,t));return _i(n.strings,...n.values)}const P5={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Cm(e){const t=e.getRootNode();if(!(t instanceof ShadowRoot))return!1;const n=t.host;return n instanceof ym?!0:Cm(n)}function km(e,t){const n=e.instanceState;J(t).forEach(r=>{if(n&&r in n)throw new Error(`Cannot set input '${String(r)}' on '${e.tagName}'. '${e.tagName}' already has a state property with the same name.`);"instanceInputs"in e?e.instanceInputs[r]=t[r]:e[r]=t[r]}),"instanceInputs"in e&&J(e.instanceInputs).forEach(r=>{r in t||(e.instanceInputs[r]=void 0)}),L5(e)}function L5(e){e._haveInputsBeenSet||(e._haveInputsBeenSet=!0)}function zc(e,t){const n=[e,"-"].join("");Object.keys(t).forEach(r=>{if(!r.startsWith(n))throw new Error(`Invalid CSS property name '${r}' in '${e}': CSS property names must begin with the element's tag name.`)})}class I5 extends CustomEvent{_type="";get type(){return this._type}constructor(t,n){super(typeof t=="string"?t:t.type,{detail:n,bubbles:!0,composed:!0})}}function lu(){return e=>class extends I5{static type=e;_type=e;constructor(t){super(e,t)}}}function ct(){return lu()}function R5(e,t){return t?Object.keys(t).filter(n=>{if(typeof n!="string")throw new TypeError(`Expected event key of type string but got type '${typeof n}' for key ${String(n)}`);if(n==="")throw new Error("Got empty string for events key.");return!0}).reduce((n,r)=>{const i=lu()([e,r].join("-"));return n[r]=i,n},{}):{}}function O5(e){return e?pe(e,t=>t):{}}const ss=Symbol("element-vir-state-setup");function _5(e){return w.isObject(e)?ss in e&&w.isFunction(e[ss]):!1}function Sm(e,t){t in e||S5()(e,t)}function V5(e,t,n){if(typeof e!="string"&&typeof e!="number"&&typeof e!="symbol")throw new TypeError(`Property name must be a string, got type '${typeof e}' from: '${String(e)}' for '${n.toLowerCase()}'`);if(!(e in t))throw new Error(`Property '${String(e)}' does not exist on '${n.toLowerCase()}'.`)}function Gc(e,t){const n=e;function r(o){t?V5(o,e,e.tagName):Sm(e,o)}function i(o,a){return r(a),n[a]}return new Proxy({},{get:i,set(o,a,u){const l=_5(u)?u[ss]():u;r(a);const f=n[a];function c(p){o[a]=p,n[a]=p}const d=e.observablePropertyListenerMap[a];if(f!==l&&Io(f)&&d&&f.removeListener(d),Io(l))if(d)l.listen(!1,d);else{let p=function(){e.requestUpdate()};e.observablePropertyListenerMap[a]=p,l.listen(!1,p)}else Io(f)&&(e.observablePropertyListenerMap[a]=void 0);return c(l),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function U5({hostClassNames:e,cssVars:t}){return{hostClasses:pe(e,(n,r)=>({name:ue(r),selector:ue(`:host(.${r})`)})),cssVars:t}}function W5({host:e,hostClassesInit:t,hostClassNames:n,state:r,inputs:i}){t&&J(t).forEach(s=>{const o=t[s],a=n[s];typeof o=="function"&&(o({state:r,inputs:i})?e.classList.add(a):e.classList.remove(a))})}function q5({element:e,eventsMap:t,cssVars:n,slotNamesMap:r}){function i(o){J(o).forEach(a=>{const u=o[a];e.instanceState[a]=u})}return{cssVars:n,slotNames:r,dispatch:o=>e.dispatchEvent(o),events:t,host:e,inputs:e.instanceInputs,state:e.instanceState,updateState:i}}function j5(e){return e?e.reduce((n,r)=>(n[r]=r,n),{}):{}}function Us(e){const t=e;if(!w.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");if(!w.isString(t.tagName))throw new TypeError("Missing valid tagName (expected a string).");if(!t.render||typeof t.render=="string")throw new Error(`Failed to define element '${t.tagName}': render is not a function`);const n={...P5,...t.options},r=R5(t.tagName,t.events),i=O5(t.hostClasses);t.hostClasses&&zc(t.tagName,t.hostClasses),t.cssVars&&zc(t.tagName,t.cssVars);const s=t.cssVars?nn(t.cssVars):{},o=j5(t.slotNames),a=typeof t.styles=="function"?t.styles(U5({hostClassNames:i,cssVars:s})):t.styles||S``,u=t.render;function l(...[c]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:f,inputs:c}}const f=class extends ym{static elementOptions=n;static tagName=t.tagName;static styles=a;_lastRenderError=void 0;_internalRenderCount=0;createRenderParams(){return q5({element:this,eventsMap:r,cssVars:s,slotNamesMap:o})}static assign=l;static events=r;static render=u;static hostClasses=i;static cssVars=s;static init=t;static slotNames=o;static stateInitStatic=t.stateInitStatic;get instanceType(){throw new Error(`"instanceType" was called on ${t.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${t.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${t.tagName} as a value but it is only for types.`)}_initCalled=!1;_hasRendered=!1;_lastRenderedProps=void 0;_haveInputsBeenSet=!1;render(){this._internalRenderCount++;try{Cm(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${t.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Us.name}' to define ${t.tagName}.`),this._hasRendered=!0;const c=this.createRenderParams();if(!this._initCalled&&t.init&&(this._initCalled=!0,t.init(c)instanceof Promise))throw new TypeError("init cannot be asynchronous");const d=u(c);if(d instanceof Promise)throw new TypeError("render cannot be asynchronous");return W5({host:c.host,hostClassesInit:t.hostClasses,hostClassNames:i,state:c.state,inputs:c.inputs}),this._lastRenderedProps={inputs:{...c.inputs},state:{...c.state}},d}catch(c){const d=Jr(c,`Failed to render ${t.tagName}`);return console.error(d),this._lastRenderError=d,ve(d)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&t.init){this._initCalled=!0;const c=this.createRenderParams();if(t.init(c)instanceof Promise)throw new TypeError(`init in '${t.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(c=>{w.hasKey(c,"destroy")&&w.isFunction(c.destroy)&&c.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),t.cleanup){const c=this.createRenderParams();if(t.cleanup(c)instanceof Promise)throw new TypeError(`cleanup in '${t.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}definition={};assignInputs(c){km(this,c)}observablePropertyListenerMap={};instanceInputs=Gc(this,!1);instanceState=Gc(this,!n.allowPolymorphicState);constructor(){super();const c=t.stateInitStatic||{};J(c).forEach(d=>{Sm(this,d),this.instanceState[d]=c[d]}),this.definition=f}};return Object.defineProperties(f,{name:{value:zw(t.tagName,{capitalizeFirstLetter:!0}),writable:!0}}),window.customElements.get(t.tagName)?console.warn(`Tried to define custom element '${t.tagName}' but it is already defined.`):window.customElements.define(t.tagName,f),f}function Fm(){return e=>{const t=e;if(!w.isObject(t))throw new TypeError("Cannot define element with non-object init: ${init}");return Us({...t,options:{ignoreUnsetInputs:!1,...t.options}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kc=(e,t,n)=>{const r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},z5=rn(class extends Pt{constructor(e){if(super(e),e.type!==Vs.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);const i=[],s=[];let o=0;for(const a of e)i[o]=r?r(a,o):o,s[o]=n(a,o),o++;return{values:s,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const i=$5(e),{values:s,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,s;const a=this.ut??=[],u=[];let l,f,c=0,d=i.length-1,p=0,b=s.length-1;for(;c<=d&&p<=b;)if(i[c]===null)c++;else if(i[d]===null)d--;else if(a[c]===o[p])u[p]=fn(i[c],s[p]),c++,p++;else if(a[d]===o[b])u[b]=fn(i[d],s[b]),d--,b--;else if(a[c]===o[b])u[b]=fn(i[c],s[b]),wr(e,u[b+1],i[c]),c++,b--;else if(a[d]===o[p])u[p]=fn(i[d],s[p]),wr(e,i[c],i[d]),d--,p++;else if(l===void 0&&(l=Kc(o,p,b),f=Kc(a,c,d)),l.has(a[c]))if(l.has(a[d])){const D=f.get(o[p]),$=D!==void 0?i[D]:null;if($===null){const A=wr(e,i[c]);fn(A,s[p]),u[p]=A}else u[p]=fn($,s[p]),wr(e,i[c],$),i[D]=null;p++}else Ro(i[d]),d--;else Ro(i[c]),c++;for(;p<=b;){const D=wr(e,u[b+1]);fn(D,s[p]),u[p++]=D}for(;c<=d;){const D=i[c++];D!==null&&Ro(D)}return this.ut=o,A5(e,u),ze}}),G5=z5;function Ws(e,t){return Ur(e,t),e.element}function K5(e){try{return e.options.host.tagName.toLowerCase()}catch{return}}function Ur(e,t){const n=K5(e),r=n?`: in ${n}`:"";if(e.type!==Vs.ELEMENT)throw new Error(`${t} directive can only be attached directly to an element${r}.`);if(!e.element)throw new Error(`${t} directive found no element${r}.`)}function Z5(e){const t=rn(class extends Pt{element;constructor(n){super(n),this.element=Ws(n,e)}render(n){return this.element.setAttribute(e,n),ze}});return{attributeSelector(n){return`[${e}="${n}"]`},attributeDirective(n){return t(n)},attributeName:e}}function Q(e,t){return Y5(e,t)}const Y5=rn(class extends Pt{element;lastListenerMetaData;constructor(e){super(e),this.element=Ws(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,t){return{eventType:e,callback:t,listener:n=>this.lastListenerMetaData?.callback(n)}}render(e,t){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new TypeError(`Cannot listen to an event with a name that is not a string. Given event name: '${String(n)}'`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=t:this.resetListener(this.createListenerMetaData(n,t)),ze}}),Zc="onDomCreated",Yc=rn(class extends Pt{element;constructor(e){super(e),Ur(e,Zc)}update(e,[t]){Ur(e,Zc);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>t(n)),this.element=n),this.render(t)}render(e){}}),Oo="onResize",Tm=rn(class extends Pt{element;resizeObserver=new ResizeObserver(e=>this.fireCallback(e));callback;constructor(e){super(e),Ur(e,Oo)}fireCallback(e){const t=e[0];if(!t)throw console.error(e),new Error(`${Oo} observation triggered but the first entry was empty.`);this.callback?.({target:t.target,contentRect:t.contentRect},this.element)}update(e,[t]){Ur(e,Oo),this.callback=t;const n=e.element,r=this.element;return n!==r&&(this.element=n,r&&this.resizeObserver.unobserve(r),this.resizeObserver.observe(n)),this.render(t)}render(e){}});function xe(e,t,n){return F5(e,()=>t,()=>n)}const{attributeDirective:J5}=Z5("data-test-id"),Ar=J5;J({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",render:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function H5(e){return{[ss]:e}}function Mm(e){const{assertInputs:t,transformInputs:n}={assertInputs:e?.assertInputs??(()=>{}),transformInputs:e?.transformInputs??(r=>r)};return{defineElement:()=>r=>(t(r),Fm()(n(r))),defineElementNoInputs:r=>(t(r),Us(n(r)))}}function Q5(e,t){return X5(void 0,e)}const X5=rn(class extends Pt{element;constructor(e){super(e),this.element=Ws(e,"assign")}render(e,t){return km(this.element,t),ze}}),ev={};function tv(e,t){return t.map((n,r)=>{const i=e[r],s=e[r+1];if(i&&s){const{shouldHaveTagNameHere:o}=Nm(i,s);if(o&&w.isString(n))return{tagName:n,tagInterpolationKey:nh(ev,n,()=>({tagName:n}))}}return n})}function Nm(e,t){const n=e.trim().endsWith("<")&&!!t.match(/^[\s>]/),r=e.trim().endsWith("</")&&t.trim().startsWith(">");return{isOpeningTag:n,shouldHaveTagNameHere:n||r}}function nv(...[e,t,n]){const r=Ui(n)?n.definition:n,{isOpeningTag:i,shouldHaveTagNameHere:s}=Nm(e,t),o=uu(r);if(o&&s&&r.tagInterpolationKey)return{replacement:r.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:e,currentTemplateString:t,currentValue:r}),new Error(`Got interpolated tag name but found no tag name on the given value: '${r?.tagName||r?.prototype?.constructor?.name||r?.constructor?.name}'`);if(!s||!o)return;if(i&&r.elementOptions&&!r.elementOptions.ignoreUnsetInputs&&!Ui(n))throw new Error(`Missing inputs for '${r.tagName}'`);return{replacement:r.tagName,getExtraValues(u){const l=Ui(u)?u.inputs:void 0;return[i&&l?Q5(l):void 0].filter(w.isTruthy)}}}function rv(e){}function iv(e){return $m(e.strings,e.values,nv,rv)}function v(e,...t){const n=tv(e,t),r=Ob(e,...n),i=Am(e,n,()=>iv(r));return{...r,strings:i.strings,values:i.values}}function xm(e){return pe(e,(t,n)=>n instanceof X?ue(n.toString({format:"hex"})):xm(n))}const sv="dodgerblue";function ga(e){const t=Math.abs(e.contrast("white","APCA")),n=Math.abs(e.contrast("black","APCA"));return t>n?"white":"black"}function _o({background:e,foreground:t}){return{background:e??new X(ga(t)),foreground:t??new X(ga(e))}}function ov(e){return e==="black"?"white":"black"}const av={black:{foregroundFaint1:new X("#ccc"),foregroundFaint2:new X("#eee")},white:{foregroundFaint1:new X("#ccc"),foregroundFaint2:new X("#eee")}},uv={black:{backgroundFaint1:new X("#666"),backgroundFaint2:new X("#444")},white:{backgroundFaint1:new X("#ccc"),backgroundFaint2:new X("#fafafa")}};function Jc({themeColor:e=sv,themeStyle:t="light"}={}){const n=new X(e),r=new X(t==="dark"?"black":"white"),i=ga(r),s=new X(i),o={nav:{hover:_o({background:n.clone().set({"hsl.l":93})}),active:_o({background:n.clone().set({"hsl.l":90})}),selected:_o({background:n.clone().set({"hsl.l":85})})},accent:{icon:n.clone().set({"hsl.l":40})},page:{background:r,...uv[ov(i)],foreground:s,...av[i]}};return xm(o)}var kt=(e=>(e.Footer="book-footer",e.NavHeader="book-nav-header",e))(kt||{});async function ya(e=1){const t=new Af;function n(){requestAnimationFrame(()=>{e--,e?n():t.resolve()})}return n(),t.promise}function lv(e){return[...e.children,...e.shadowRoot?.children??[]]}function cv(e){return e.matches(":focus")}function os(e){if(e instanceof ShadowRoot)return os(e.host);const t=e.parentNode;if(t)return t instanceof Element?t:os(t)}function Bm(e,t){if(t(e))return e;const n=os(e);if(n)return Bm(n,t)}async function fv(e){return dv(e,1)}async function dv(e,t){return new Promise(n=>{new IntersectionObserver((i,s)=>{ar.isLengthAtLeast(i,1),s.disconnect(),n(i[0].intersectionRatio>=t)}).observe(e)})}function $r(e,t,n={}){const r=n.useOriginalTarget?e.target:e.currentTarget;if(!(r instanceof t)){const i=t.name,s=r?.constructor.name,o=n.useOriginalTarget?`Current target from event '${e.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${e.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return r}function hv(e){const t=os(e);return t&&Bm(t,n=>globalThis.getComputedStyle(n).overflowY!=="visible")||document.body}const mv={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},pv=Object.keys(mv),gv={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},yv=Object.keys(gv),wv={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},bv=Object.keys(wv);Array.from(new Set([...pv,...bv,...yv].sort()));function Ev({searchQuery:e,searchIn:t}){const n=t.length,r=e.length;if(r>n)return!1;if(r===n)return e===t;const i=t.toLowerCase(),s=e.toLowerCase();e:for(let o=0,a=0;o<r;o++){const u=s.codePointAt(o);for(;a<n;)if(i.codePointAt(a++)===u)continue e;return!1}return!0}const Dv=rh(32);function Wi(e){return e.join(Dv)}function Pm(e){if(!e.length)return[];const t=Wi(e),n=Pm(e.slice(0,-1));return[t,...n]}const vv=["error","errors"];function Av(e){return vv.includes(e)}function $v({flattenedNodes:e,searchQuery:t}){const n={};function r(i){Object.values(i.children).map(o=>(r(o),Wi(o.fullUrlBreadcrumbs))).forEach(o=>n[o]=!0)}return e.forEach(i=>{const s=i.entry.errors.length&&Av(t),o=Wi(i.fullUrlBreadcrumbs);if(Ev({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:t.toLowerCase()})||s||n[o]){const u=Pm(i.fullUrlBreadcrumbs);r(i),u.forEach(l=>n[l]=!0)}else n[o]=!1}),e.filter(i=>{const s=Wi(i.fullUrlBreadcrumbs),o=n[s];if(!w.isBoolean(o))throw new TypeError(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return o})}class cu extends Error{name="SpaRouterError"}class Hc extends cu{name="GlobalUrlEventsConsolidationError"}class Cv extends cu{name="SanitizationDepthMaxed"}function kv(e,t){const n=t?.constructor,r=e?.constructor?.prototype,i=e?.constructor===n,s=n&&r?r instanceof n:!1;return typeof e==typeof t&&(i||s)}const Lm="__vir__shape__definition__key__do__not__use__in__actual__objects";function Im(e){return w.hasKey(e,Lm)}var Le;(function(e){e.And="and",e.Class="class",e.Enum="enum",e.Exact="exact",e.IndexedKeys="indexed-keys",e.Or="or",e.Unknown="unknown",e.NumericRange="numeric-range",e.Optional="optional"})(Le||(Le={}));const Rm="__vir__shape__specifier__key__do__not__use__in__actual__objects";function Om(...e){return Vm(e,Le.IndexedKeys)}function Un(...e){return Vm(e,Le.Or)}function qs(e){return Lt(e,Le.And)}function js(e){return Lt(e,Le.Class)}function zs(e){return Lt(e,Le.Enum)}function Gs(e){return Lt(e,Le.Exact)}function Ks(e){return Lt(e,Le.IndexedKeys)}function li(e){return Lt(e,Le.Or)}function Zs(e){return Lt(e,Le.Unknown)}function _m(e){return Lt(e,Le.NumericRange)}function as(e){return Lt(e,Le.Optional)}function Lt(e,t){const n=ci(e);return!!n&&n.specifierType===t}function Vm(e,t){return{[Rm]:!0,specifierType:t,parts:e}}function yn(e,t,n,r){const i=ci(t);if(i){if(_m(i))return w.isNumber(e)?e>=i.parts[0]&&e<=i.parts[1]:!1;if(js(i))return e instanceof i.parts[0];if(qs(i))return i.parts.every(s=>yn(e,s));if(li(i))return i.parts.some(s=>yn(e,s));if(Gs(i))return w.isObject(e)?yn(e,i.parts[0]):e===i.parts[0];if(zs(i))return w.hasValue(Object.values(i.parts[0]),e);if(Ks(i))return w.isObject(e)?Sv(e,i,!!n)&&ch(e).every(s=>yn(s,i.parts[0].values)):!1;if(Zs(i))return!0}return r?t===e:kv(e,t)}function Sv(e,t,n){const r=t.parts[0].required,i=t.parts[0].keys;if(n)if(r){const s=fu(t);return w.isBoolean(s)?s:s.every(o=>J(e).some(a=>yn(a,o,!1,!0)))}else return!0;else return J(e).every(s=>yn(s,i))}function fu(e){const t=e.parts[0].keys,n=ci(t);if(w.isPropertyKey(t))return!0;if(n){if(js(n))return!1;if(qs(n))return!1;if(li(n)){const r=n.parts.map(i=>fu(Om({...e.parts[0],keys:i})));return r.includes(!1)?!1:r.flat().filter(w.isPropertyKey)}else if(Gs(n)){const r=n.parts.filter(w.isPropertyKey);return r.length!==n.parts.length?!1:r}else{if(zs(n))return Object.values(n.parts[0]);if(Ks(n))return!1;if(Zs(n))return!0}}return!1}function ci(e){if(w.isObject(e)&&w.hasKey(e,Rm)){if(!w.hasKey(e,"parts")||!w.isArray(e.parts))throw new Error("Found a shape specifier but its parts are not valid.");if(!w.hasKey(e,"specifierType")||!w.isEnumValue(e.specifierType,Le))throw new Error("Found a shape specifier but its specifier type is not valid.");return e}}class Qc extends TypeError{name="DefaultValueConstructionError"}function wa(e){return In(e)}function In(e){const t=ci(e);if(t){if(as(t))return In(t.parts[0]);if(_m(t))return t.parts[0];if(js(t)){const n=t.parts[0];try{return new n}catch(r){throw new Qc(`Failed to create default value for classShape for class '${n.name}': ${ve(r)}`)}}else{if(li(t)||Gs(t))return In(t.parts[0]);if(qs(t))return t.parts.reduce((n,r)=>Object.assign(n,In(r)),{});if(zs(t))return Object.values(t.parts[0])[0];if(Ks(t)){const n=fu(t);return!t.parts[0].required||w.isBoolean(n)?{}:Object.fromEntries(n.map(r=>[r,In(t.parts[0].values)]))}else{if(Zs(t))return t.parts[0]??{};throw new Qc(`found specifier but it matches no expected specifiers: ${String(t.specifierType)}`)}}}return Im(e)?wa(e.shape):e instanceof RegExp?e:w.isArray(e)?e.map(In):w.isObject(e)?pe(e,(n,r)=>wa(r)):e}function Um(e,t=!1){const n={shape:e,isReadonly:t,get defaultValue(){return wa(e)},[Lm]:!0};return Object.defineProperty(n,"runtimeType",{enumerable:!1,configurable:!1,get(){throw new Error("runtimeType cannot be used as a value, it is only for types.")}}),n}class Ye extends TypeError{name="ShapeMismatchError"}function Fv(e,t,n={},r=""){try{mt({subject:e,shape:t.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!n.allowExtraKeys}})}catch(i){throw r?Jr(i,r):i}}function ba(e){return[e[0],...e.slice(1).map(t=>`'${String(t)}'`)].join(" -> ")}function mt({subject:e,shape:t,keys:n,options:r}){if(Zs(t))return!0;if(Im(t))return mt({subject:e,shape:t.shape,keys:n,options:r});const i=ba(n);if(ci(e))throw new Ye(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(as(t))return mt({keys:n,options:r,shape:t.parts[0],subject:e});if(yn(e,t,!r.ignoreExtraKeys)){if(w.isFunction(t))return w.isFunction(e);if(js(t))return e instanceof t.parts[0];if(e&&typeof e=="object"){const o=e,a=r.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(f=>[f,!1])),u=[];let l=!1;if(li(t)){const f=[];l=t.parts.some(c=>{try{const d=mt({subject:e,shape:c,keys:n,options:r});return Object.assign(a,d),!0}catch(d){if(d instanceof Ye)return f.push(d.message),!1;throw d}}),!l&&w.isLengthAtLeast(f,1)&&u.push(f[0])}else if(qs(t))l=t.parts.every(f=>{try{const c=mt({subject:e,shape:f,keys:n,options:{...r,ignoreExtraKeys:!0}});return Object.assign(a,c),!0}catch(c){if(c instanceof Ye)return u.push(c.message),!1;throw c}});else if(Gs(t)){const f=mt({subject:e,shape:t.parts[0],keys:n,options:{...r,exactValues:!0}});Object.assign(a,f),l=!0}else{if(zs(t))throw new Ye(`Cannot compare an enum specifier to an object at ${i}`);if(w.isArray(t)&&w.isArray(o))l=o.every((f,c)=>{const d=t.some(p=>{try{return mt({subject:f,shape:p,keys:[...n,c],options:r}),!0}catch(b){if(b instanceof Ye)return u.push(b.message),!1;throw b}});return a[c]=d,d});else if(Ks(t)){const f=pe(e,(c,d)=>(r.ignoreExtraKeys||mt({shape:t.parts[0].keys,subject:c,keys:[...n,c],options:r}),mt({shape:t.parts[0].values,subject:d,keys:[...n,c],options:r}),!0));Object.assign(a,f),l=!0}else{const f=Tv({keys:n,options:r,shape:t,subject:e});Object.assign(a,f),l=!0}}if(u.length)throw new Ye(Yr(u));if(!l){const c=`Failed on key(s): ${Object.keys(a).filter(d=>!a[d]).map(d=>ba([...n,d])).join(",")}`;throw new Ye(c)}return r.ignoreExtraKeys||Object.entries(a).forEach(([f,c])=>{if(!c)throw new Ye(`subject as extra key '${f}' in ${i}.`)}),a}else if(r.exactValues)return e===t}else throw new Ye(`Subject does not match shape definition at key ${i}`);return!0}function Tv({keys:e,options:t,shape:n,subject:r}){const i=ba(e),s={};if(w.isObject(n)){const o=new Set(J(n)),a=new Set(J(r));o.forEach(u=>{(u in r||as(n[u]))&&a.add(u)}),t.ignoreExtraKeys||a.forEach(u=>{if(!o.has(u))throw new Ye(`Subject has extra key '${String(u)}' in ${i}`)}),o.forEach(u=>{const l=n[u],f=li(l)?l.parts.includes(void 0):!1,c=l?.includes?.(void 0)||l===void 0;if(!a.has(u)&&!f&&!c)throw new Ye(`Subject missing key '${String(u)}' in ${i}`)}),a.forEach(u=>{if(!(u in r)&&as(n[u])){s[u]=!0;return}const l=r[u];if(t.ignoreExtraKeys&&!o.has(u))return;const f=n[u];mt({subject:l,shape:f,keys:[...e,u],options:t}),s[u]=!0})}else throw new Ye(`Shape definition at ${i} was not an object.`);return s}Um({paths:[""],search:Un(void 0,Om({keys:"",values:[""],required:!1})),hash:Un(void 0,"")});const Mv=Um({basePath:Un("",void 0),sanitizeRoute:e=>e,maxListenerCount:Un(1,void 0),disableWarnings:Un(void 0,!1),isPaused:Un(!1,void 0)}),Vo="://";function du(...e){const t=e.join("/"),[n,r=""]=t.includes(Vo)?t.split(Vo):["",t];let i=!1;const s=r.replace(/\/{2,}/g,"/").split("/").reduce((o,a,u,l)=>{if(i)return o;const f=l[u+1];let c=a;const d=f?.startsWith("?"),p=!a.includes("?")&&d,b=f==="?";if(d||p){i=!0;let D=!1;const $=l.slice(u+2).reduce((A,F)=>(F.includes("#")&&(D=!0),D?A.concat(F):[A,F].join("&")),"");c=[a,f,b?jn({value:$,prefix:"&"}):$].join("")}return o.concat(c)},[]);return[n,n?Vo:"",s.join("/")].join("")}var Wr;(function(e){e.Encode="encode",e.Decode="decode",e.None="none"})(Wr||(Wr={}));var qr;(function(e){e.Clear="clear",e.Replace="replace",e.Append="append"})(qr||(qr={}));function Si(e,t){return e.map(n=>{if(n!=null)return Gn(String(n),t)}).filter(n=>n!=null)}function Gn(e,t){return t?.encoding===Wr.Decode?decodeURIComponent(e):t?.encoding===Wr.Encode?encodeURIComponent(e):e}const Nv=cr(Q0({keys:"",values:[""],required:!0}));function xv(e,t,n){const r=n?.searchParamStrategy===qr.Clear?{}:pe(e,(o,a)=>w.isString(a)?[a]:a),i=pe(t,(o,a)=>{if(n?.searchParamStrategy===qr.Append){const u=r[o],l=w.isArray(u)?u:[u];if(a){const f=w.isArray(a)?a:[a];return Si([...l,...f],n)}else return Si(l,n)}else return w.isArray(a)?Si(a,n):a?Si([a],n):void 0});return Ra({...r,...i},(o,a)=>!!a)}function Wm(e,t){return w.isString(e)&&!e.includes("?")?{}:(w.isString(e)?e:e instanceof URLSearchParams?e.toString():e.search).replace(/(^.*\?)|(#[^#]*$)/,"").split("&").map(s=>{const[o,...a]=Ow(s,"=");return[o,a.length?a.join("="):void 0]}).reduce((s,[o,a])=>{const u=qm({options:t,key:o,value:a}),l=nh(s,u.key,()=>[]);return a!=null&&l.push(u.value),s},{})}function Bv(e){if(e!=null)return w.isArray(e)?[...e]:e===""?[]:[e]}function Pv(e,t){const n=bs(Object.entries(e),([r,i])=>{const s=Bv(i);return s?.length?s.map(o=>{const a=qm({options:t,key:r,value:o});return[a.key,a.value].join("=")}):[r]},(r,[,i])=>i!=null).flat();return n.length?je({value:n.join("&"),prefix:"?"}):""}function qm({options:e,key:t,value:n}){return{key:Gn(t,e),value:Gn(String(n),e)}}function jm({hash:e,hostname:t,password:n,pathname:r,port:i,protocol:s,search:o,username:a}){return[s?s+"://":"",a?a+":":"",n?n+"@":"",Ys({hostname:t,port:i}),hu({hash:e,pathname:r,search:o})].join("")}function zm({pathname:e}){const t=jn({value:e,prefix:"/"});return t?t.split("/"):[]}function hu({hash:e,pathname:t,search:n}){return[je({value:t,prefix:"/"}),n?je({value:n,prefix:"?"}):"",e?je({value:e,prefix:"#"}):""].join("")}function Ys({hostname:e,port:t}){return[e,t?":"+t:""].join("")}function Gm({hostname:e,port:t,protocol:n}){return[n,Ys({hostname:e,port:t})].filter(w.isTruthy).join("://")}function us(e,t){const n=w.isString(e)?e:e.toString(),r=n.replace(/^[^#]*(?:#|$)/,""),i=r?je({value:Gn(r,t),prefix:"#"}):"",s=n.replace(/#[^#]*$/,""),o=s.replace(/^[^?]*(?:\?|$)/,""),a=o?je({value:Gn(o,t),prefix:"?"}):"",u=s.replace(/\?[^?]*$/,""),l=u.includes("://")?u.replace(/:\/\/.*$/,""):"",f=u.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),c=f.replace(/@.*/,""),d=f.replace(/^[^@]*@/,""),p=c!==d,[b,...D]=p?c.split(":").reverse():[],$=D.toReversed().join("").replace(/[/:]/g,"")||"",A=b?.replace(/[/:]/g,"")||"",F=d.replace(/[:/].*/,""),I=d.replace(/^[^/:]*(:|\/|$)/,"$1"),_=jn({value:I.replace(/\/.*/,""),prefix:":"}),G=Gn(I.replace(/^[^/]*(?:\/|$)/,"/"),t),Ae=Ys({hostname:F,port:_}),Rt=Gm({hostname:F,port:_,protocol:l}),ke=jm({hash:i,hostname:F,password:A,pathname:G,port:_,protocol:l,search:a,username:$}),Re=Wm(a),dt=zm({pathname:G});return{fullPath:hu({hash:i,pathname:G,search:a}),hash:i,host:Ae,hostname:F,href:ke,origin:Rt,password:A,pathname:G,paths:dt,port:_,protocol:l,search:a,searchParams:Re,username:$}}function Lv(e,t,n){const r=w.isString(e)?e:e instanceof URL?e.toString():"",i=w.isString(e)||e instanceof URL?t:e,s=w.isString(e)||e instanceof URL?n:t,o=us(r),a=pe(o,(d,p)=>{if(!w.hasKey(i,d))return p;const b=i[d];return w.isNumber(b)?String(b):w.isString(b)?d==="hash"&&b?je({value:b,prefix:"#"}):d==="pathname"?je({value:b,prefix:"/"}):b:p});w.hasKey(i,"paths")&&i.paths&&(a.pathname=du("",...i.paths));const u=w.isString(i.search)?Wm(je({value:i.search,prefix:"?"})):sh(i.search||{}),l=xv(a.searchParams,u,{...s,encoding:Wr.None}),f=Pv(l,s);return{...a,searchParams:l,search:f,paths:zm(a),fullPath:hu(a),host:Ys(a),origin:Gm(a),href:jm({...a,search:f})}}const Iv=cr({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:Nv,hash:"",fullPath:"/",href:"/"});({...Iv.defaultValue});const Rv=0;function Km(e){return!(e.type!=="click"&&e.type!=="mousedown"||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.button!==Rv)}const Js="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const Ov=globalThis.history.pushState;function Xc(...e){const t=Ov.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Js)),t}const _v=globalThis.history.replaceState;function ef(...e){const t=_v.apply(globalThis.history,e);return globalThis.dispatchEvent(new Event(Js)),t}function Vv(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){{if(globalThis.history.pushState===Xc)throw new Hc("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===ef)throw new Hc("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Xc,globalThis.history.replaceState=ef,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Js))})}}function Uo(e,t){const n=us(e),r=jn({value:jn({value:n.pathname,prefix:je({value:t||"",prefix:"/"})}),prefix:"/"}),i=r?r.split("/"):[],s=Object.keys(n.searchParams).length?n.searchParams:void 0,o=n.hash?jn({value:n.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:o}}class Uv{innerObservable;removeGlobalListener;sanitizationDepth=0;params;constructor(t){Fv(t,Mv),this.params={...t};const n=this.readCurrentRoute();this.innerObservable=new pm({defaultValue:n,equalityCheck:()=>!1}),Vv(),this.removeGlobalListener=n0(globalThis,Js,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Cv("Looping route sanitization detected; aborting window URL change listener.");const r=Uo(globalThis.location.href,this.params.basePath),i=t.sanitizeRoute(r);w.jsonEquals(r,i)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),t.disableWarnings||console.warn("Route sanitized.",{from:r,to:i}))}),this.setRoute(n,{replace:!0})}routeIncludesBasePath(t){return!t.paths||!this.params.basePath?!1:du(...t.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Uo(globalThis.location.href,this.params.basePath))}sanitizeRoute(t){return this.params.sanitizeRoute(t)}createRouteUrl(t){const n=Uo(globalThis.location.href,void 0),r={...n,...t},i=this.sanitizeRoute(r),o=this.routeIncludesBasePath(n)&&!this.routeIncludesBasePath(i)&&this.params.basePath?{...i,paths:[this.params.basePath,...i.paths]}:i;return Lv(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?je({value:o.hash,prefix:"#"}):"#"},{searchParamStrategy:qr.Clear}).href}setRoute(t,n={}){const r=this.createRouteUrl(t),{fullPath:i}=us(r);return this.params.isPaused||!n.force&&w.jsonEquals(us(globalThis.location.href).fullPath,i)?!1:n.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(t,n){return Km(n)?(n.preventDefault(),this.setRoute(t)):!1}listen(t,n){const r=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(r&&this.innerObservable.getListenerCount()>=r)throw new cu(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${r}'.`);return this.innerObservable.listen(t,n),()=>this.removeListener(n)}removeListener(t){return this.innerObservable.removeListener(t)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}function Wv(e){return new Uv({basePath:e,sanitizeRoute(t){return{paths:qv(t.paths),hash:void 0,search:void 0}}})}function qv(e){const t=e[0];if(w.isEnumValue(t,it)){if(t===it.Book)return[it.Book,...e.slice(1)];if(t===it.Search)return e[1]?[t,e[1]]:[it.Book,...e.slice(1)];throw new Error(`Route path not handled for sanitization: ${e.join("/")}`)}else return Hn.paths}const ls=lu()("element-book-change-route"),tf="vira-",{defineElement:jv}=Mm({assertInputs:e=>{if(!e.tagName.startsWith(tf))throw new Error(`Tag name should start with '${tf}' but got '${e.tagName}'`)}}),It=jv,T=nn({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),zv=X;function Gv(e){try{if(!e)throw new Error("invalid empty color");return new zv(e)}catch{throw new Error(`Invalid color: ${m(e)}`)}}function fe({name:e,svgTemplate:t}){return{name:e,svgTemplate:t}}function nf(e,t){const n=J(t).map(r=>{const i=t[r],s=Gv(i);return`${T[r].name}: ${s.toString()};`}).join(" ");return fe({name:e.name,svgTemplate:v`
            <div style=${n}>${e.svgTemplate}</div>
        `})}const Zm=fe({name:"Check24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),ot=nn({"vira-form-input-radius":"8px"}),Hs=S`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,at=nn({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Dn=nn({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":S`calc(${ot["vira-form-input-radius"].value} + 4px)`});function mu({selector:e,elementBorderSize:t,outlineGap:n=2,outlineWidth:r=2}){const i=ue(ah(r+n+t));return S`
        ${ue(e)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${r}px solid ${Dn["vira-focus-outline-color"].value};
            border-radius: ${Dn["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Zt=nn({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Dn["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),Kv=S`
    padding: 0;
    margin: 0;
`,Kt=S`
    ${Kv};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,rf=S`#e2e2e2`,Ym={menuShadow:S`
        filter: drop-shadow(0px 5px 5px ${rf});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:S`
        filter: drop-shadow(0px -5px 5px ${rf});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},jr=S`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,O=It()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:e})=>!!e.fitContainer},styles:({hostClasses:e})=>S`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${e["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,render({inputs:e}){return e.icon?e.icon.svgTemplate:""}}),Ct=It()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:e})=>e.selected},styles:({hostClasses:e})=>S`
        :host {
            display: flex;
            ${jr};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${e["vira-dropdown-item-selected"].selector} ${O} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${O} {
            transition: opacity
                ${at["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${ot["vira-form-input-radius"].value}
                ${ot["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${ot["vira-form-input-radius"].value}
                ${ot["vira-form-input-radius"].value} 0 0;
        }
    `,render({inputs:e}){return v`
            <div class="option">
                <${O.assign({icon:Zm})}></${O}>
                <slot>${e.label}</slot>
            </div>
        `}}),Ea="group";function Zv(e,t,n){return[e,t,n].filter(r=>r!==void 0).join(",")||""}function Yv(e){const[t,n,r]=e.split(",");return n?{type:"2d",xCord:Al(t),yCord:Al(n),isGroup:r===Ea}:{type:"1d",isGroup:t===Ea}}function Jv(e,t){Object.entries(t).forEach(([n,r])=>{w.isBoolean(r)&&r?e.setAttribute(n,""):w.isBoolean(r)||r==null?e.removeAttribute(n):e.setAttribute(n,String(r))})}const Hv=rn(class extends Pt{element;lastKey;constructor(e){super(e),this.element=Ws(e,"modifyElement")}render(e,t){return e!==this.lastKey&&(t(this.element),this.lastKey=e),ze}}),Da={name:"data-nav"},Rn="nav-activated",va={js:{click(e){return`${e}.${Rn}`},selected(e){return`${e}:focus`}},css:{click(e){return S`
                ${ue(va.js.click(e))}
            `},selected(e){return S`
                ${ue(va.js.selected(e))}
            `}}},Qv={activateKeys:["Space","Return","Enter"]};function Xv(){Jm=sh(Qv)}let Jm;Xv();function sf(e){return Jm.activateKeys.some(t=>{const n=t.toLowerCase();return n===e.key.toLowerCase()||n===e.code.toLowerCase()})}function eA(e,t){const n=Zv(e,t);return Hv(`${e}-${t}`,r=>{const i=r.hasAttribute("tabindex")||e===Ea?{}:{tabindex:0},s={[Da.name]:n,...i};ar.instanceOf(r,HTMLElement),Jv(r,s),r.style.getPropertyValue("cursor")||r.style.setProperty("cursor","pointer"),r.addEventListener("mousemove",o=>{o.target===r&&r.focus()},!0),r.addEventListener("mouseleave",o=>{o.target===r&&r.blur()},!0),r.addEventListener("mousedown",o=>{o.target===r&&r.classList.add(Rn)},!0),r.addEventListener("mouseup",o=>{o.target===r&&r.classList.remove(Rn)},!0),r.addEventListener("blur",()=>{r.classList.remove(Rn)},!0),r.addEventListener("keydown",o=>{o.target===r&&sf(o)&&r.classList.add(Rn)},!0),r.addEventListener("keyup",o=>{o.target===r&&sf(o)&&r.classList.remove(Rn)},!0)})}function tA(e,t){return Hm([],e,t)}function Hm(e,t,n){return!t||t.type==="child"?!1:t.type==="1d"?of(t.children,t,0,e,n):t.children.some((r,i)=>of(r,t,i,e,n))}function of(e,t,n,r,i){return e.some((s,o)=>{const a=w.hasKey(t,"isRoot")&&t.isRoot?r:[t,...r];return i(a,s,{x:o,y:n})?!0:Hm(a,s,i)})}function nA(e){return e.toReversed().find(t=>!t.isGroup)}function zr(e){if(!e)return;let t,n,r;tA(e,(o,a,u)=>cv(a.element)?(t=o,n=a,r=u,!0):!1);const i=t?t[0]||e:void 0,s=t?nA(t)||e:void 0;if(!(!n||!i||!r||!s||!t))return{node:n,parent:i,nonGroupParent:s,ancestors:t}}function Gr(e){e.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),e.focus()}function rA(e){if(!e)return{success:!1,reason:"no nav tree"};const t=zr(e);if(!t)return{success:!1,reason:"no focused node to enter into"};if(t.node.type==="child"||!t.node.children.length)return{success:!1,reason:"no children to enter into"};const n=t.node.type==="1d"?t.node.children[0]:t.node.children[0]?.[0];return n?(Gr(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element}):{success:!1,reason:"failed to find first child to enter into"}}function iA(e){if(!e)return{success:!1,reason:"no nav tree"};const t=zr(e);if(!t)return{success:!1,reason:"no focused node to exit out of"};const n=t.nonGroupParent;return n.isRoot?{success:!1,reason:"at top level nav already, nothing to exit to"}:(Gr(n.element),{success:!0,defaulted:!1,wrapped:!1,newElement:n.element})}function Qm(e){const t=[];return lv(e).forEach(n=>{if(!(n instanceof HTMLElement))return;const r=Qm(n),i=n.hasAttribute(Da.name)?Yv(n.getAttribute(Da.name)||""):void 0;if(!i){t.push(...r);return}t.push({children:r,element:n,navValue:i})}),t}function sA(e){const t=Qm(e);return Xm(t)}function Xm(e){if(!w.isLengthAtLeast(e,1))return;const t={type:e[0].navValue.type,children:[],isRoot:!0,isGroup:!1};return e.forEach(n=>{const r=n.children.length?Xm(n.children):void 0;if(n.navValue.isGroup&&!r){const o=new Error("group nav has no children");throw console.error(o,n),o}const i=oA(n,t.children),s=r?{element:n.element,children:r.children,type:r.type,isGroup:n.navValue.isGroup,coords:i}:{element:n.element,type:"child",coords:i,isGroup:!1};if(n.navValue.type==="2d"&&t.type==="2d"){t.children[i.y]||(t.children[i.y]=[]);const o=t.children[i.y];if(ar.isDefined(o),o[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);o[i.x]=s}else if(n.navValue.type==="1d"&&t.type==="1d"){if(t.children[i.x])throw new Error(`Parent already has child at ${i.x},${i.y}`);t.children[i.x]=s}else if(t.type!==n.navValue.type){const o=new Error("inconsistent nav dimensionality");throw console.error(o,n),o}}),t}function oA(e,t){if(e.navValue.type==="2d")return{x:e.navValue.xCord,y:e.navValue.yCord};if(e.navValue.type==="1d")return{x:t.length,y:0};throw new Error(`Unexpected node nav type: '${e.navValue.type}'`)}function af(e,t){return e>t}function uf(e,t){return e<t}var He;(function(e){e.Up="up",e.Down="down",e.Left="left",e.Right="right"})(He||(He={}));function pu(e){const t=e.type==="1d"?e.children[0]:e.children[0]?.[0];if(t)return t.type==="child"?t:t.isGroup?pu(t):t}function lf(e,t,n){if(!e)return{success:!1,reason:"no nav tree"};const r=zr(e);if(!r){const a=pu(e);return a?(Gr(a.element),{success:!0,wrapped:!1,defaulted:!0,newElement:a.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=ep(r.parent,t,r.node),o=n?!0:!s;return i&&o?(Gr(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?o?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"failed to find node to focus"}}function ep(e,t,n){if(t===He.Down||t===He.Up){const i=t===He.Down?uf:af,s=t===He.Down?1:-1,o=e.type==="1d"?0:Do(n.coords.y+s,{min:0,max:e.children.length-1}),a=e.type==="2d"?e.children[o]:void 0,u={x:e.type==="1d"?Do(n.coords.x+s,{min:0,max:e.children.length-1}):a&&n.coords.x>=a.length?a.length-1:n.coords.x,y:o},l=e.type==="1d"?e.children[u.x]:e.children[u.y]?.[u.x],f=e.type==="1d"?i(u.x,n.coords.x):i(u.y,n.coords.y);return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:f}}else{const i=t===He.Right?uf:af,s=t===He.Right?1:-1,o=e.type==="1d"?e.children:e.children[n.coords.y];ar.isDefined(o,`No current row found at y index: '${n.coords.y}'`);const a={x:Do(n.coords.x+s,{min:0,max:o.length-1}),y:n.coords.y},u=i(a.x,n.coords.x),l=e.type==="1d"?e.children[a.x]:e.children[a.y]?.[a.x];return{nextNode:l?.element===n.element?void 0:l,requiresWrapping:u}}}function aA(e,t,n,r){const i=w.isLengthAtLeast(t.ancestors,2)?t.ancestors[1]:e,s=t.ancestors[0];if(!s)return{success:!1,reason:"no parent to find a pibling from"};const{nextNode:o,requiresWrapping:a}=ep(i,n,s),u=o?.isGroup?pu(o):o,l=r?!0:!a;return u?l?(Gr(u.element),{success:!0,defaulted:!1,newElement:u.element,wrapped:a}):{success:!1,reason:"wrapping blocked"}:{success:!1,reason:"no node to navigate to"}}class tp{rootElement;constructor(t){this.rootElement=t}getCurrentlyFocused(){return zr(this.buildNavTree())}buildNavTree(){return sA(this.rootElement)}navigate({direction:t,allowWrapping:n}){return lf(this.buildNavTree(),t,n)}enterInto(){return rA(this.buildNavTree())}exitOutOf(){return iA(this.buildNavTree())}navigatePibling({allowWrapping:t,direction:n}){const r=this.buildNavTree(),i=zr(r);return!i||!r?lf(r,n,t):aA(r,i,n,t)}}const uA={option:"dropdown-option"},Fi=It()({tagName:"vira-dropdown-options",events:{selectionChange:ct()},styles:S`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${ot["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${Zt["vira-form-background-color"].value};
            border: 1px solid ${Zt["vira-form-border-color"].value};
            color: ${Zt["vira-form-foreground-color"].value};
            ${Ym.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${va.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${Zt["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${Ct} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${Hs};
            pointer-events: auto;
        }
    `,render({inputs:e,dispatch:t,events:n}){const r=e.options.map(i=>{const s=i.template||v`
                    <${Ct.assign({label:i.label,selected:e.selectedOptions.includes(i)})}></${Ct}>
                `;return v`
                <div
                    class="dropdown-item ${Vr({disabled:!!i.disabled})}"
                    ${Ar(uA.option)}
                    title=${gm(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?re:eA()}
                    ${Q("mousedown",o=>{o.stopPropagation()})}
                    ${Q("mouseup",o=>{o.stopPropagation(),i.disabled||t(new n.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return v`
            <slot>${r}</slot>
        `}}),lA=fe({name:"Chat24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
                d="M5 15.4c-1.6-1.2-2.6-2.7-2.6-4.4 0-3.5 4.3-6.3 9.6-6.3s9.6 2.8 9.6 6.3-4.3 6.4-9.6 6.4L9 17l-5 3.8 1-5.5Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
        </svg>
    `}),np=fe({name:"ChevronUp24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${T["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${T["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),rp=fe({name:"CloseX24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),cA=fe({name:"Commit24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),fA=fe({name:"Document24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24">
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),ip=fe({name:"Element16Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),St=fe({name:"Element24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),sp=fe({name:"EyeClosed24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${T["vira-icon-fill-color"].value}
            stroke=${T["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${T["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),op=fe({name:"EyeOpen24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${T["vira-icon-fill-color"].value}
            stroke=${T["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${T["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),ap=fe({name:"Loader24Icon",svgTemplate:v`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),dA=S`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${at["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Kr=fe({name:"LoaderAnimated24Icon",svgTemplate:v`
        <style>
            ${dA}
        </style>
        ${ap.svgTemplate}
    `}),gu=fe({name:"Options24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),hA=fe({name:"Pencil24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
                d="M20.041 4.966c.303-.418.097-1.085-.459-1.489l-1.771-1.285c-.557-.404-1.255-.393-1.558.025L5.12 17.561l-.167 4.215 3.955-1.467S19.965 5.071 20.041 4.966"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
            <path
                d="m5.384 17.197 3.788 2.749m5.97-16.198 3.788 2.749"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill="none"
            />
        </svg>
    `}),mA=fe({name:"Shield24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24">
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
        </svg>
    `}),pA=fe({name:"Star24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke-miterlimit="2">
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
                fill=${T["vira-icon-fill-color"].value}
            />
        </svg>
    `}),cs=fe({name:"StatusFailure24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),gA=fe({name:"StatusInProgress24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${T["vira-icon-stroke-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width="calc(${T["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${T["vira-icon-stroke-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width="calc(${T["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${T["vira-icon-stroke-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width="calc(${T["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),yA=fe({name:"StatusSuccess24Icon",svgTemplate:v`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${T["vira-icon-fill-color"].value}
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${T["vira-icon-stroke-color"].value}
                stroke-width=${T["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Aa={Chat24Icon:lA,Check24Icon:Zm,ChevronUp24Icon:np,CloseX24Icon:rp,Commit24Icon:cA,Document24Icon:fA,Element16Icon:ip,Element24Icon:St,EyeClosed24Icon:sp,EyeOpen24Icon:op,Loader24Icon:ap,LoaderAnimated24Icon:Kr,Options24Icon:gu,Pencil24Icon:hA,Shield24Icon:mA,Star24Icon:pA,StatusFailure24Icon:cs,StatusInProgress24Icon:gA,StatusSuccess24Icon:yA};class wA extends pm{constructor(){super({defaultValue:document.hidden,equalityCheck:w.strictEquals}),globalThis.addEventListener("visibilitychange",n=>this.updateVisibility(n));const t=n=>this.updateVisibility(n);globalThis.onpageshow=t,globalThis.onpagehide=t,globalThis.onfocus=t,globalThis.onblur=t}updateVisibility(t){const n=EA.includes(t.type),r=bA.includes(t.type),i=n?!0:r?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const bA=["blur","focusout","pagehide"],EA=["focus","focusin","pageshow"],DA=new wA;function vA(e,t){return DA.listen(e,t)}const cf={top:0,left:0,right:0,bottom:0};class up extends dh("hide-pop-up"){}class lp extends fh()("nav-select"){}class AA{listenTarget=new t0;options={minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0};cleanupCallbacks=[];lastRootElement;constructor(t){this.options={...this.options,...t}}attachGlobalListeners(t){const n=new tp(t);this.cleanupCallbacks=[vA(!1,r=>{r||this.removePopUp()}),Ml("mousedown",r=>{this.lastRootElement&&r.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Ml("keydown",r=>{const i=r.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:He.Down,allowWrapping:!1});else if(i==="ArrowUp")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:He.Up,allowWrapping:!1});else if(i==="ArrowLeft")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:He.Left,allowWrapping:!1});else if(i==="ArrowRight")r.stopImmediatePropagation(),r.preventDefault(),n.navigate({direction:He.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=n.getCurrentlyFocused();s&&(n.enterInto(),this.listenTarget.dispatch(new lp({detail:s.node.coords})),r.stopImmediatePropagation(),r.preventDefault())}}})]}listen(t,n,r){return this.listenTarget.listen(t,n,r)}removePopUp(){this.cleanupCallbacks.forEach(t=>t()),this.listenTarget.dispatch(new up)}showPopUp(t,n){this.lastRootElement=t;const r={...this.options,...n},i=hv(t);ar.instanceOf(i,HTMLElement);const s=t.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,u=i.offsetHeight-i.clientHeight,l=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-u},f=pe(cf,p=>s[p]),c=pe(cf,p=>{const b=l[p],D=f[p];return Math.abs(b-D)}),d=c.top>c.bottom+r.verticalDiffThreshold&&c.bottom<r.minDownSpace;return this.attachGlobalListeners(t),{popDown:!d,positions:{container:l,root:f,diff:c}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function $A({selected:e,options:t,isMultiSelect:n}){if(e.length&&t.length){const r=t.filter(i=>e.includes(i.id));return r.length>1&&!n?(console.error("vira-dropdown has multiple selections but `isMultiSelect` is not `true`. Truncating to the first selection."),r.slice(0,1)):r}else return[]}function CA(e){const t=new Set,n=[];if(e.forEach(r=>{t.has(r.id)?n.push(r.id):t.add(r.id)}),n.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${Kw(n)}`)}function ff(e,t,n){return n?t.includes(e)?t.filter(r=>r!==e):[...t,e]:[e]}function df({open:e,emitEvent:t},{updateState:n,popUpManager:r,dispatch:i,host:s}){e?n({showPopUpResult:r.showPopUp(s)}):r.removePopUp(),t&&i(e)}const Ti={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},Cr=It()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:e})=>!!e.isDisabled},styles:({hostClasses:e})=>S`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Dn["vira-focus-outline-color"].name}: ${Zt["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${Kt};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${ot["vira-form-input-radius"].value};
            transition: border-radius
                ${at["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${mu({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(0);
            transition: ${at["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${Zt["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${jr};
            border-radius: inherit;
            background-color: ${Zt["vira-form-background-color"].value};
            color: ${Zt["vira-form-foreground-color"].value};
        }

        .open-upwards ${Fi} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${Ym.menuShadowReversed}
        }

        ${e["vira-dropdown-disabled"].selector} {
            ${Hs}
            pointer-events: auto;
        }

        ${e["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:ct(),openChange:ct()},stateInitStatic:{showPopUpResult:void 0,popUpManager:H5(()=>new AA),navController:void 0},cleanup({state:e,updateState:t}){t({showPopUpResult:void 0}),e.popUpManager.destroy()},init({state:e,updateState:t,host:n,inputs:r,dispatch:i,events:s}){e.popUpManager.listen(up,()=>{if(t({showPopUpResult:void 0}),!r.isDisabled){const o=n.shadowRoot.querySelector(".dropdown-wrapper");ar.instanceOf(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),e.popUpManager.listen(lp,o=>{const a=o.detail.x,u=r.options[a];if(!u)throw new Error(`Found no dropdown option at index '${a}'`);r.isMultiSelect||df({emitEvent:!0,open:!1},{dispatch:l=>{i(new s.openChange(l))},host:n,popUpManager:e.popUpManager,updateState:t}),i(new s.selectedChange(ff(u.id,r.selected,!!r.isMultiSelect)))}),t({navController:new tp(n)})},render({dispatch:e,events:t,state:n,inputs:r,updateState:i,host:s}){CA(r.options);function o(b){df(b,{dispatch:D=>{e(new t.openChange(D))},host:s,popUpManager:n.popUpManager,updateState:i})}r.isDisabled?o({open:!1,emitEvent:!1}):r.z_debug_forceOpenState!=null&&(!r.z_debug_forceOpenState&&n.showPopUpResult?o({emitEvent:!1,open:!1}):r.z_debug_forceOpenState&&!n.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=$A(r),u=r.icon?v`
                  <${O.assign({icon:r.icon})}
                      ${Ar(Ti.icon)}
                  ></${O}>
              `:"",l=n.showPopUpResult?n.showPopUpResult.popDown?S`
                      bottom: -${n.showPopUpResult.positions.diff.bottom}px;
                  `:S`
                      top: -${n.showPopUpResult.positions.diff.top}px;
                  `:void 0;function f(){o({emitEvent:!0,open:!n.showPopUpResult})}const c=!a.length,d=r.selectionPrefix&&!c?v`
                      <span class="selected-label-prefix" ${Ar(Ti.prefix)}>
                          ${r.selectionPrefix}
                      </span>
                  `:"",p=c?r.placeholder||"":a.map(b=>b.label).join(", ");return v`
            <button
                ?disabled=${!!r.isDisabled}
                class="dropdown-wrapper ${Vr({open:!!n.showPopUpResult,"open-upwards":!n.showPopUpResult?.popDown})}"
                ${Ar(Ti.trigger)}
                role="listbox"
                aria-expanded=${!!n.showPopUpResult}
                ${Q("keydown",b=>{!n.showPopUpResult&&b.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${Q("click",b=>{b.detail===0&&f()})}
                ${Q("mousedown",b=>{b.button===0&&f()})}
            >
                <div class="dropdown-trigger">
                    ${u}
                    <span
                        class="selection-display ${Vr({"using-placeholder":c})}"
                        title=${gm(c?p:void 0)}
                    >
                        ${d} ${p}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${O.assign({icon:np})}
                            class="trigger-icon"
                        ></${O}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${l}>
                    ${xe(!!n.showPopUpResult,v`
                            <${Fi.assign({options:r.options,selectedOptions:a})}
                                ${Q(Fi.events.selectionChange,b=>{r.isMultiSelect||o({emitEvent:!0,open:!1}),e(new t.selectedChange(ff(b.detail.id,r.selected,!!r.isMultiSelect)))})}
                                ${Ar(Ti.options)}
                            ></${Fi}>
                        `)}
                </div>
            </button>
        `}});var cp=(e=>(e.Default="vira-button-default",e.Outline="vira-button-outline",e))(cp||{});const de=It()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:e})=>e.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:e})=>!!e.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:e,cssVars:t})=>S`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${jr};
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-color"].value};
            ${t["vira-button-internal-foreground-color"].name}: ${t["vira-button-secondary-color"].value};
            ${Dn["vira-focus-outline-color"].name}: ${t["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${t["vira-button-internal-background-color"].name}: ${t["vira-button-primary-active-color"].value};
        }

        ${e["vira-button-disabled"].selector} {
            ${Hs};
        }

        ${e["vira-button-outline-style"].selector} button {
            color: ${t["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${Kt};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${ot["vira-form-input-radius"].value};
            background-color: ${t["vira-button-internal-background-color"].value};
            color: ${t["vira-button-internal-foreground-color"].value};
            padding: ${t["vira-button-padding"].value};
            transition:
                color ${at["vira-interaction-animation-duration"].value},
                background-color
                    ${at["vira-interaction-animation-duration"].value},
                border-color ${at["vira-interaction-animation-duration"].value};
        }

        ${mu({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${O} + .text-template {
            margin-left: 8px;
        }
    `,render:({inputs:e})=>{const t=e.icon?v`
                  <${O.assign({icon:e.icon})}></${O}>
              `:"",n=e.text?v`
                  <span class="text-template">${e.text}</span>
              `:"";return v`
            <button ?disabled=${e.disabled}>${t} ${n}</button>
        `}}),Dt=It()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:e})=>e.expanded},slotNames:["header"],styles:({hostClasses:e})=>S`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${Kt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${at["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${e["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:ct()},stateInitStatic:{contentHeight:0},render({state:e,slotNames:t,updateState:n,dispatch:r,events:i,inputs:s}){const o=s.expanded?S`
                  height: ${e.contentHeight}px;
              `:S`
                  height: 0;
              `;return v`
            <button
                class="header-wrapper"
                ${Q("click",()=>{r(new i.expandChange(!s.expanded))})}
            >
                <slot name=${t.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${Tm(({contentRect:a})=>{n({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),Ut=It()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:e})=>e.dominantDimension==="height"},slotNames:["loading","error"],events:{imageLoad:ct(),imageError:ct()},styles:({hostClasses:e})=>S`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${e["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${e["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},render({inputs:e,state:t,updateState:n,dispatch:r,events:i,slotNames:s}){const o=e.imageUrl,a=t.erroredUrls[o]?v`
                  <slot class="status-wrapper" name=${s.error}>
                      <${O.assign({icon:cs})} class="error"></${O}>
                  </slot>
              `:t.loadedUrls[o]?void 0:v`
                    <slot class="status-wrapper" name=${s.loading}>
                        <${O.assign({icon:Kr})}></${O}>
                    </slot>
                `;return v`
            ${xe(!!a,a)}
            <img
                class=${Vr({hidden:!!a})}
                ${Q("load",async()=>{e._debugLoadDelay&&await xr(e._debugLoadDelay),n({loadedUrls:{...t.loadedUrls,[o]:!0}}),r(new i.imageLoad)})}
                ${Q("error",async u=>{e._debugLoadDelay&&await xr(e._debugLoadDelay),n({erroredUrls:{...t.erroredUrls,[o]:!0}}),r(new i.imageError(u.error))})}
                src=${o}
            />
        `}});function $a({input:e,matcher:t}){return!e||!t?!0:e.length>1?!!e.split("").every(n=>$a({input:n,matcher:t})):t instanceof RegExp?!!e.match(t):t.includes(e)}function kA({value:e,allowed:t,blocked:n}){const r=t?$a({input:e,matcher:t}):!0,i=n?$a({input:e,matcher:n}):!1;return r&&!i}function Ca(e){if(!e.value)return{filtered:e.value,blocked:""};const{filtered:t,blocked:n}=e.value.split("").reduce((r,i)=>(kA({...e,value:i})?r.filtered.push(i):r.blocked.push(i),r),{filtered:[],blocked:[]});return{filtered:t.join(""),blocked:n.join("")}}function SA({inputs:e,previousValue:t,event:n,inputBlockedCallback:r,newValueCallback:i}){if(!(n instanceof InputEvent))throw new TypeError("Text input event was not an InputEvent.");const s=$r(n,HTMLInputElement),o=n.data;if(o){const{blocked:u}=Ca({value:o,allowed:e.allowedInputs,blocked:e.blockedInputs});u.length&&r(u)}const a=Ca({value:s.value,allowed:e.allowedInputs,blocked:e.blockedInputs}).filtered;s.value!==a&&(s.value=a),t!==a&&i(a)}var fp=(e=>(e.Default="text",e.Password="password",e.Email="email",e))(fp||{});const se=It()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:e})=>!!e.disabled,"vira-input-fit-text":({inputs:e})=>!!e.fitText,"vira-input-clear-button-shown":({inputs:e})=>!!e.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Dn["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:ct(),inputBlocked:ct()},styles:({hostClasses:e,cssVars:t})=>S`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Dn["vira-focus-outline-color"].name}: ${t["vira-input-focus-border-color"].value};
                color: ${t["vira-input-text-color"].value};
            }

            ${e["vira-input-disabled"].selector} {
                ${Hs};
            }

            ${e["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${e["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${e["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${e["vira-input-fit-text"].selector} .size-span {
                ${Kt};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${jr};
                vertical-align: middle;
                max-height: 100%;
            }

            ${e["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${Kt};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${ot["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${t["vira-input-border-color"].value};
                transition: border
                    ${at["vira-interaction-animation-duration"].value};
            }

            label {
                ${Kt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${t["vira-input-padding-horizontal"].value};
                border-radius: ${ot["vira-form-input-radius"].value};
                background-color: ${t["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${mu({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${t["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${Kt};
                cursor: text;
                margin: ${t["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${t["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${t["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${t["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${jr};
            }

            button {
                ${Kt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${at["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${t["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${t["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${t["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${t["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${t["vira-input-show-password-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},render:({inputs:e,dispatch:t,state:n,updateState:r,events:i})=>{const{filtered:s}=Ca({value:e.value,allowed:e.allowedInputs,blocked:e.blockedInputs}),o=e.icon?v`
                  <${O.assign({icon:e.icon})} class="left-side-icon"></${O}>
              `:"",a=e.fitText?S`
                  width: ${n.forcedInputWidth}px;
              `:"",u=e.disableBrowserHelps||e.type==="password";return v`
            <label>
                ${o}
                ${xe(!!e.fitText,v`
                        <span
                            class="size-span"
                            ${Tm(({contentRect:l})=>{r({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||e.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${FA(e.type,n.showPassword)}
                    style=${a}
                    autocomplete=${u?"off":""}
                    autocorrect=${u?"off":""}
                    autocapitalize=${u?"off":""}
                    spellcheck=${u?"false":""}
                    ?disabled=${e.disabled}
                    .value=${s}
                    ${Q("input",l=>{SA({inputs:e,previousValue:s,event:l,inputBlockedCallback(f){t(new i.inputBlocked(f))},newValueCallback(f){t(new i.valueChange(f))}})})}
                    placeholder=${e.placeholder}
                />
                ${xe(!!(e.showClearButton&&e.value),v`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${Q("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),t(new i.valueChange(""))})}
                        >
                            <${O.assign({icon:rp})}></${O}>
                        </button>
                    `)}
                ${xe(e.type==="password",v`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${Q("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),r({showPassword:!n.showPassword})})}
                        >
                            <${O.assign({icon:n.showPassword?op:sp})}></${O}>
                        </button>
                    `)}
                ${xe(!!e.suffix,v`
                        <div class="suffix">${e.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function FA(e,t){return e==="password"&&t?"text":e||"text"}const Mi=It()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:e})=>S`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${e["vira-link-hover-color"].value};
        }
    `,render({inputs:e}){function t(n){e.route&&e.route.router.setRouteOnDirectNavigation(e.route.route,n)&&e.route.scrollToTop&&window.scrollTo(0,0)}if(e.link?.newTab)return v`
                <a href=${e.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const n=e.link?e.link.url:e.route.router.createRouteUrl(e.route.route);return v`
                <a href=${n} rel="noopener noreferrer" ${Q("click",t)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:tt}=Mm(),Qe=tt()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:e})=>S`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${e["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,render:({inputs:e,dispatch:t})=>{const n=e.router?.createRouteUrl({...e.route})??"#";return v`
            <a
                href=${n}
                ${Q("click",r=>{(!e.router||Km(r))&&(r.preventDefault(),window.scrollTo(0,0),t(new ls(e.route)))})}
            >
                <slot></slot>
            </a>
        `}});function TA(e,t){return e.entry.entryType===De.Root?!1:e.entry.entryType===De.Page||w.jsonEquals(t,e.fullUrlBreadcrumbs.slice(0,-1))?!0:w.jsonEquals(t?.slice(0,-1),e.fullUrlBreadcrumbs.slice(0,-1))}const At=tt()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:e})=>S`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${Z["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${Z["element-book-nav-hover-background-color"].value};
            color: ${Z["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${Z["element-book-nav-active-background-color"].value};
            color: ${Z["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${Qe.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${e["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${Z["element-book-nav-selected-background-color"].value};
            color: ${Z["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${O} {
            display: inline-flex;
            color: ${Z["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){const t=e.flattenedNodes.map(n=>{if(!TA(n,e.selectedPath))return;const r=S`
                --book-nav-internal-indent: ${n.fullUrlBreadcrumbs.length-1};
            `;return v`
                <li style=${r}>
                    <${Qe.assign({router:e.router,route:{paths:[it.Book,...n.fullUrlBreadcrumbs]}})}
                        class=${Vr({"title-row":!0,selected:e.selectedPath?w.jsonEquals(e.selectedPath,n.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${xe(zn(n,De.ElementExample),v`
                                    <${O.assign({icon:ip})}></${O}>
                                `)}
                            ${n.entry.title}
                        </div>
                    </${Qe}>
                </li>
            `});return v`
            <${Qe.assign({route:Hn,router:e.router})}>
                <slot name=${kt.NavHeader}>Book</slot>
            </${Qe}>
            <ul>
                ${t}
            </ul>
        `}});async function MA(e){await ya(2);const t=e.shadowRoot.querySelector(".selected");if(!t)throw new Error("Failed to find selected nav tree element.");await fv(t)||t.scrollIntoView({behavior:"smooth",block:"center"})}const tn=tt()({tagName:"book-error",styles:S`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,render({inputs:e}){return(w.isArray(e.message)?e.message:[e.message]).map(n=>v`
                <p>${n}</p>
            `)}}),Zr=tt()({tagName:"book-page-controls",events:{controlValueChange:ct()},hostClasses:{"book-page-controls-has-controls":({inputs:e})=>!!Object.keys(e.config).length},styles:({hostClasses:e})=>S`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${e["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${se} {
            height: 24px;
            max-width: 128px;
        }

        ${O}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,render({inputs:e,dispatch:t,events:n}){return Object.entries(e.config).length?Object.entries(e.config).map(([r,i],s)=>{if(i.controlType===Y.Hidden)return"";const o=NA(e.currentValues[r],i,a=>{const u=w.isArray(e.fullUrlBreadcrumbs)?e.fullUrlBreadcrumbs:e.fullUrlBreadcrumbs[r];if(!u)throw new Error(`Failed to find breadcrumbs from given control name: '${r}'`);t(new n.controlValueChange({fullUrlBreadcrumbs:u,newValues:{...e.currentValues,[r]:a}}))});return v`
                    <div class="control-wrapper">
                        ${xe(s===0,v`
                                <${O.assign({icon:gu})}
                                    class="options-icon"
                                ></${O}>
                            `)}
                        <label class="control-wrapper">
                            <span>${r}</span>
                            ${o}
                        </label>
                    </div>
                `}):""}});function NA(e,t,n){return kn(t,Y.Hidden)?"":kn(t,Y.Checkbox)?v`
            <input
                type="checkbox"
                .value=${e}
                ${Q("input",r=>{const i=$r(r,HTMLInputElement);n(i.checked)})}
            />
        `:kn(t,Y.Color)?v`
            <input
                type="color"
                .value=${e}
                ${Q("input",r=>{const i=$r(r,HTMLInputElement);n(i.value)})}
            />
        `:kn(t,Y.Text)?v`
            <${se.assign({value:String(e),showClearButton:!0,disableBrowserHelps:!0})}
                ${Q(se.events.valueChange,r=>{n(r.detail)})}
            ></${se}>
        `:kn(t,Y.Number)?v`
            <input
                type="number"
                .value=${e}
                ${Q("input",r=>{const i=$r(r,HTMLInputElement);n(i.value)})}
            />
        `:kn(t,Y.Dropdown)?v`
            <select
                .value=${e}
                ${Q("input",r=>{const i=$r(r,HTMLSelectElement);n(i.value)})}
            >
                ${t.options.map(r=>v`
                        <option ?selected=${r===e} value=${r}>
                            ${r}
                        </option>
                    `)}
            </select>
        `:v`
            <p class="error">${t.controlType} controls are not implemented yet.</p>
        `}const hf=tt()({tagName:"book-breadcrumbs",styles:S`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,render:({inputs:e})=>{const t=e.currentRoute.paths.slice(1);return t.length?t.map((n,r,i)=>{const s=r>=i.length-1,o=i.slice(0,r+1),a=s?"":v`
                      <span class="spacer">&gt;</span>
                  `;return v`
                <${Qe.assign({route:{hash:void 0,search:void 0,paths:[it.Book,...o]},router:e.router})}>
                    ${n}
                </${Qe}>
                ${a}
            `}):v`
                &nbsp;
            `}}),Wo=tt()({tagName:"book-breadcrumbs-bar",styles:S`
        :host {
            border-bottom: 1px solid
                ${Z["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${Z["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,render({inputs:e,dispatch:t}){return v`
            ${xe(!!e.currentSearch,v`
                    &nbsp;
                `,v`
                    <${hf.assign({currentRoute:e.currentRoute,router:e.router})}></${hf}>
                `)}
            <input
                placeholder="search"
                .value=${e.currentSearch}
                ${Q("input",async n=>{const r=n.currentTarget;if(!(r instanceof HTMLInputElement))throw new TypeError("Failed to find input element for search.");const i=r.value;await xr({milliseconds:200}),r.value===i&&(r.value?t(new ls({paths:[it.Search,encodeURIComponent(r.value)]})):t(new ls(Hn)))})}
            />
        `}}),mf=tt()({tagName:"book-entry-description",styles:S`
        :host {
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${Z["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,render({inputs:e}){return e.descriptionParagraphs.map(t=>v`
                <p>${t}</p>
            `)}}),pf=tt()({tagName:"book-page-wrapper",styles:S`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${Qe} {
            display: inline-block;
        }
    `,render({inputs:e}){const t=e.isTopLevel?v`
                  <h2 class="header-with-icon">${e.pageNode.entry.title}</h2>
              `:v`
                  <h3 class="header-with-icon">${e.pageNode.entry.title}</h3>
              `,n=[it.Book,...e.pageNode.fullUrlBreadcrumbs],r=e.pageNode.entry.errors.length?ih(e.pageNode.entry.errors):void 0;return r&&console.error(r),v`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${Qe.assign({route:{paths:n,hash:void 0,search:void 0},router:e.router})}>
                        ${t}
                    </${Qe}>
                    ${r?v`
                              <${tn.assign({message:r.message})}></${tn}>
                          `:v`
                              <${mf.assign({descriptionParagraphs:e.pageNode.entry.descriptionParagraphs})}></${mf}>
                              <${Zr.assign({config:e.pageNode.entry.controls,currentValues:za(e.controls,e.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:e.pageNode.fullUrlBreadcrumbs})}></${Zr}>
                          `}
                </div>
            </div>
        `}}),Ni=tt()({tagName:"book-element-example-controls",styles:S`
        :host {
            display: flex;
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,render({inputs:e}){const t=[it.Book,...e.elementExampleNode.fullUrlBreadcrumbs];return v`
            <${Qe.assign({route:{paths:t,hash:void 0,search:void 0},router:e.router})}>
                ${e.elementExampleNode.entry.title}
            </${Qe}>
        `}}),gf=Symbol("unset-internal-state"),yf=tt()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:gf},render({state:e,inputs:t,updateState:n}){try{if(t.elementExampleNode.entry.errors.length)throw ih(t.elementExampleNode.entry.errors);if(!t.elementExampleNode.entry.render||typeof t.elementExampleNode.entry.render=="string")throw new Error(`Failed to render example '${t.elementExampleNode.entry.title}': render is not a function`);e.isUnset===gf&&n({isUnset:void 0,...t.elementExampleNode.entry.stateInitStatic});const r=t.elementExampleNode.entry.render({state:e,updateState:n,controls:t.currentPageControls});if(r instanceof Promise)throw new TypeError("render output cannot be a promise");return v`
                ${xe(!!t.elementExampleNode.entry.styles,v`
                        <style>
                            ${t.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${r}
            `}catch(r){return console.error("ERROR HERE",ve(r)),console.error(r),v`
                <${tn.assign({message:`${t.elementExampleNode.entry.title} failed: ${ve(r)}`})}></${tn}>
            `}},options:{allowPolymorphicState:!0}}),wf=tt()({tagName:"book-element-example-wrapper",styles:S`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${Ni} {
            color: ${Z["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${Ni} {
            color: ${Z["element-book-accent-icon-color"].value};
        }
    `,render({inputs:e}){return v`
            <div class="individual-example-wrapper">
                <${Ni.assign(_w(e,["currentPageControls"]))}></${Ni}>
                <${yf.assign(e)}></${yf}>
            </div>
        `}});function dp(e,t,n,r){const i=ea(n,r),s=[];if(i){const o=dp(e,t,i,r);o&&s.push(o)}if(zn(n,De.Page)&&!e.includes(n)){const o=za(t,n.fullUrlBreadcrumbs);s.push({config:n.entry.controls,current:o,breadcrumbs:pe(o,()=>n.fullUrlBreadcrumbs)})}return s.reduce((o,a)=>({config:{...o.config,...a.config},current:{...o.current,...a.current},breadcrumbs:{...o.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function xA({currentNodes:e,isTopLevel:t,router:n,isSearching:r,controls:i,originalTree:s}){if(!e.length&&r)return[v`
                No results
            `];const o=w.isLengthAtLeast(e,1)?dp(e,i,e[0],s):void 0,a=o&&Object.values(o.config).length&&w.isLengthAtLeast(e,1)?v`
                  <${Zr.assign({config:o.config,currentValues:o.current,fullUrlBreadcrumbs:o.breadcrumbs})}></${Zr}>
              `:re,u=G5(e,l=>l.fullUrlBreadcrumbs.join(">"),l=>{if(zn(l,De.Page))return v`
                    <${pf.assign({isTopLevel:t,pageNode:l,controls:i,router:n})}
                        class="block-entry"
                    ></${pf}>
                `;if(zn(l,De.ElementExample)){const f=za(i,l.fullUrlBreadcrumbs.slice(0,-1));return v`
                    <${wf.assign({elementExampleNode:l,currentPageControls:f,router:n})}
                        class="inline-entry"
                    ></${wf}>
                `}else return zn(l,De.Root)?re:v`
                    <${tn.assign({message:`Unknown entry type for rendering: '${l.entry.entryType}'`})}
                        class="block-entry"
                    ></${tn}>
                `});return[a,u]}const Nn=tt()({tagName:"book-entry-display",styles:S`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${Wo} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${at["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:ct()},stateInitStatic:{lastElement:void 0},render:({inputs:e,dispatch:t,events:n,state:r,updateState:i})=>{const s=ta(e.currentRoute.paths),o=xA({currentNodes:e.currentNodes,isTopLevel:!0,router:e.router,isSearching:!!s,controls:e.controls,originalTree:e.originalTree});return v`
            <${Wo.assign({currentSearch:s,currentRoute:e.currentRoute,router:e.router})}></${Wo}>

            ${xe(e.showLoading,v`
                    <div
                        ${Yc(()=>{t(new n.loadingRender(!0))})}
                        class="loading"
                    >
                        <${O.assign({icon:Kr})}></${O}>
                    </div>
                    ${xe(!!r.lastElement,v`
                            ${r.lastElement}
                            <slot name=${kt.Footer}></slot>
                        `)}
                `,v`
                    <div
                        ${Yc(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot name=${kt.Footer}></slot>
                `)}
        `}});function BA(e,t,n){const r=bf(e,t);return r.length?r:(n(Hn),bf(e,Hn.paths))}function bf(e,t){return e.filter(n=>wb({searchFor:t.slice(1),searchIn:n.fullUrlBreadcrumbs}))}const qo=Fm()({tagName:"element-book-app",events:{pathUpdate:ct()},stateInitStatic:{currentRoute:Hn,router:void 0,loading:!0,colors:{config:void 0,theme:Jc(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:S`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${Z["element-book-page-background-color"].value};
            color: ${Z["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${Nn} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${At} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,init({host:e,state:t}){setTimeout(async()=>{await Ef(e,ta(t.currentRoute.paths),t.currentRoute)},500)},cleanup({state:e,updateState:t}){e.router&&(e.router.destroy(),t({router:void 0}))},render:({state:e,inputs:t,host:n,updateState:r,dispatch:i,events:s})=>{t._debug&&console.info("rendering element-book app");function o(f){return{...e.currentRoute,...f}}function a(f){const c=o(f);return!w.jsonEquals(e.currentRoute,c)}function u(f){t.preventWindowTitleChange||(e.originalWindowTitle||r({originalWindowTitle:document.title}),document.title=[e.originalWindowTitle,f].filter(w.isTruthy).join(" - "))}function l(f){if(!a(f))return;const c=o(f);e.router?e.router.setRoute(c):r({currentRoute:{...e.currentRoute,...c}}),t.elementBookRoutePaths&&!w.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&i(new s.pathUpdate(c.paths))}try{if(t.elementBookRoutePaths&&!w.jsonEquals(t.elementBookRoutePaths,e.currentRoute.paths)&&l({paths:t.elementBookRoutePaths}),t.internalRouterConfig?.useInternalRouter&&!e.router){const A=Wv(t.internalRouterConfig.basePath);r({router:A}),A.listen(!0,F=>{r({currentRoute:F})})}else!t.internalRouterConfig?.useInternalRouter&&e.router&&e.router.destroy();const f={themeColor:t.themeColor};if(!w.jsonEquals(f,e.colors.config)){const A=Jc(f);r({colors:{config:f,theme:A}}),Hb(n,A)}const c=t._debug??!1,d=Ab({entries:t.pages,debug:c});(!e.treeBasedControls||e.treeBasedControls.pages!==t.pages||e.treeBasedControls.lastGlobalInputs!==t.globalValues)&&(t._debug&&console.info("regenerating global controls"),r({treeBasedControls:{pages:t.pages,lastGlobalInputs:t.globalValues??{},controls:o0(d.tree,{children:e.treeBasedControls?.controls.children,controls:t.globalValues})}}));const p=ta(e.currentRoute.paths),D=(p?$v({flattenedNodes:d.flattenedNodes,searchQuery:p}):void 0)??BA(d.flattenedNodes,e.currentRoute.paths,l);u(D[0]?.entry.title);const $=e.treeBasedControls?.controls;return $?(t._debug&&console.info({currentControls:$}),v`
                <div
                    class="root"
                    ${Q(ls,async A=>{const F=A.detail;if(!a(F))return;if(r({loading:!0}),l(F),!(n.shadowRoot.querySelector(At.tagName)instanceof At))throw new TypeError(`Failed to find child '${At.tagName}'`);await Ef(n,p,e.currentRoute)})}
                    ${Q(Zr.events.controlValueChange,A=>{if(!e.treeBasedControls)return;const F=Cb($,A.detail.fullUrlBreadcrumbs,A.detail.newValues);r({treeBasedControls:{...e.treeBasedControls,controls:F}})})}
                >
                    <${At.assign({flattenedNodes:d.flattenedNodes,router:e.router,selectedPath:p?void 0:e.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${kt.NavHeader}
                            slot=${kt.NavHeader}
                        ></slot>
                    </${At}>
                    <${Nn.assign({controls:$,currentNodes:D,currentRoute:e.currentRoute,debug:c,originalTree:d.tree,router:e.router,showLoading:e.loading})}
                        ${Q(Nn.events.loadingRender,async A=>{await ya();const F=n.shadowRoot.querySelector(Nn.tagName);F?F.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Nn.tagName}' for scrolling.`),await ya(),r({loading:!A.detail})})}
                    >
                        <slot
                            name=${kt.Footer}
                            slot=${kt.Footer}
                        ></slot>
                    </${Nn}>
                </div>
            `):v`
                    <${tn.assign({message:"Failed to generate page controls."})}></${tn}>
                `}catch(f){return console.error(f),v`
                <p class="error">${ve(f)}</p>
            `}}});async function Ef(e,t,n){if(t||n.paths.length<=1)return;const r=e.shadowRoot.querySelector(At.tagName);if(!(r instanceof At))throw new TypeError(`Failed to find child '${At.tagName}'`);await MA(r)}const sn=ft({title:"Elements",parent:void 0}),yu=ft({parent:sn,title:"Dropdown"}),PA=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:v`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:S`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:S`
            ${Ct} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],LA=ft({title:Ct.tagName,parent:yu,controls:{Selected:{controlType:Y.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:Y.Text,initValue:""}},defineExamples({defineExample:e}){PA.forEach(t=>{e({title:t.title,stateInitStatic:{selected:t.inputs.selected||[]},styles:t.customStyle,render({controls:n}){const r={label:n.Label||t.inputs.label,selected:n.Selected?n.Selected==="all":t.inputs.selected};return t.customTemplate?v`
                            <${Ct.assign(r)}>
                                ${t.customTemplate}
                            </${Ct}>
                        `:v`
                            <${Ct.assign(r)}></${Ct}>
                        `}})})}}),Mr=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],IA=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Mr,{id:42,label:"custom template",template:v`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Mr,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:S`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:S`
            ${Cr} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:St}}],RA=ft({title:Cr.tagName,parent:yu,controls:{Selected:{controlType:Y.Dropdown,initValue:"",options:["",...Mr.map(e=>e.label)]},Prefix:{controlType:Y.Text,initValue:""},"Force State":{controlType:Y.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:Y.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:Y.Dropdown,initValue:"",options:["",...Object.keys(Aa)]},Disabled:{controlType:Y.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:Y.Text,initValue:"Select something"}},defineExamples({defineExample:e}){IA.forEach(t=>{e({title:t.title,stateInitStatic:{selected:t.inputs?.selected||[]},styles:t.customStyle,render({state:n,updateState:r,controls:i}){const s={placeholder:t.inputs&&"placeholder"in t.inputs?t.inputs.placeholder:i.Placeholder,options:t.inputs?.options||Mr,selected:i.Selected?[Mr.find(o=>o.label===i.Selected)?.id].filter(w.isTruthy):n.selected,selectionPrefix:i.Prefix||t.inputs?.selectionPrefix,isDisabled:i.Disabled?i.Disabled==="all":t.inputs?.isDisabled,icon:i.Icon?Aa[i.Icon]:t.inputs?.icon,isMultiSelect:i["Multi Select"]?i["Multi Select"]==="all":t.inputs?.isMultiSelect,z_debug_forceOpenState:i["Force State"]?i["Force State"]==="force open":t.inputs?.z_debug_forceOpenState};return v`
                        <${Cr.assign(s)}
                            ${Q(Cr.events.selectedChange,o=>{r({selected:o.detail})})}
                        ></${Cr}>
                    `}})})}}),OA=ft({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:Y.Color,initValue:""},"Fill Color":{controlType:Y.Color,initValue:""},"Stroke Width":{controlType:Y.Number,initValue:1}},defineExamples({defineExample:e}){Object.values(Aa).forEach(t=>{e({title:t.name,styles:S`
                    :host(:hover) ${O} {
                        background-color: #f2f2f2;
                    }

                    ${O} {
                        padding: 8px;
                        border-radius: ${ot["vira-form-input-radius"].value};
                    }
                `,render({controls:n}){const r=S`
                        ${T["vira-icon-fill-color"].name}: ${ue(n["Fill Color"]||"inherit")};
                        ${T["vira-icon-stroke-color"].name}: ${ue(n["Stroke Color"]||"inherit")};
                        ${T["vira-icon-stroke-width"].name}: ${ue(n["Stroke Width"]?ah(n["Stroke Width"]):"inherit")};
                    `;return v`
                        <${O.assign({icon:t})} style=${r}></${O}>
                    `}})})}}),_A=ft({parent:sn,title:de.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:Y.Color,initValue:de.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:Y.Color,initValue:de.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:Y.Color,initValue:de.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:Y.Color,initValue:de.cssVars["vira-button-primary-active-color"].default}},defineExamples({defineExample:e}){function t({title:n,styles:r,inputs:i}){const s=r??S``;e({title:n,styles:s,render({controls:o}){const a=S`
                        ${de.cssVars["vira-button-primary-color"].name}: ${ue(o["Primary color"]||"inherit")};
                        ${de.cssVars["vira-button-secondary-color"].name}: ${ue(o["Secondary color"]||"inherit")};
                        ${de.cssVars["vira-button-primary-hover-color"].name}: ${ue(o["Hover color"]||"inherit")};
                        ${de.cssVars["vira-button-primary-active-color"].name}: ${ue(o["Active color"]||"inherit")};
                    `;return v`
                        <${de.assign({text:"hello",...i})}
                            style=${a}
                        ></${de}>
                    `}})}t({title:"basic"}),t({title:"with icon",inputs:{icon:gu}}),t({title:"outline",inputs:{buttonStyle:cp.Outline}}),t({title:"disabled",inputs:{disabled:!0}}),t({title:"custom width",styles:S`
                ${de} {
                    width: 100px;
                }
            `}),t({title:"custom height",styles:S`
                ${de} {
                    height: 75px;
                }
            `}),e({title:"customized colors",styles:S`
                :host {
                    ${de.cssVars["vira-button-primary-color"].name}: pink;
                    ${de.cssVars["vira-button-secondary-color"].name}: purple;
                    ${de.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${de.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,render(){return v`
                    <${de.assign({text:"hello"})}></${de}>
                `}})}}),VA=ft({title:Dt.tagName,parent:sn,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],defineExamples({defineExample:e}){e({title:"stacked examples",styles:S`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>v`
                        <${Dt.assign({expanded:!!n.expandedStates[i]})}
                            ${Q(Dt.events.expandChange,s=>{const o=[...n.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${Dt.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>Variable contents</p>
                            <button
                                ${Q("click",()=>{const s=[...n.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${xe(!!n.showMoreStates[i],v`
                                    <p>Variable contents</p>
                                    <p>Variable contents</p>
                                `)}
                            <p>Variable contents</p>
                        </${Dt}>
                    `)}}),e({title:"wider examples",styles:S`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},render({updateState:t,state:n}){return new Array(3).fill(0).map((r,i)=>v`
                        <${Dt.assign({expanded:!!n.expandedStates[i]})}
                            ${Q(Dt.events.expandChange,s=>{const o=[...n.expandedStates];o[i]=s.detail,t({expandedStates:o})})}
                        >
                            <div
                                class="section-header"
                                slot=${Dt.slotNames.header}
                            >
                                Section ${i}
                            </div>
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                            <button
                                ${Q("click",()=>{const s=[...n.showMoreStates];s[i]=!s[i],t({showMoreStates:s})})}
                            >
                                show more
                            </button>
                            ${xe(!!n.showMoreStates[i],v`
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                    <p>
                                        Variable contents Variable contents Variable contents
                                        Variable contents Variable contents Variable contents
                                    </p>
                                `)}
                            <p>
                                Variable contents Variable contents Variable contents Variable
                                contents Variable contents Variable contents
                            </p>
                        </${Dt}>
                    `)}})}}),UA=ft({title:O.tagName,parent:sn,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],defineExamples({defineExample:e}){e({title:"basic",render(){return v`
                    <${O.assign({icon:St})}></${O}>
                `}}),e({title:"using createColoredIcon",render(){return v`
                    <${O.assign({icon:nf(St,{"vira-icon-stroke-color":"red"})})}></${O}>
                `}}),e({title:"fit container",styles:S`
                ${O} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,render(){return v`
                    <${O.assign({icon:nf(St,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${O}>
                `}})}}),WA=ft({title:Ut.tagName,parent:sn,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],defineExamples({defineExample:e}){[{title:"simple image",inputs:{imageUrl:"/element-vir/vira/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:S`
                    border-radius: 32px;
                `,loadingSlot:v`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${O.assign({icon:Kr,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:S`
                    border-radius: 32px;
                `,errorSlot:v`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${O.assign({icon:cs,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/element-vir/vira/bolt.png"},styles:S`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/element-vir/vira/bolt.png",dominantDimension:"height"},styles:S`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/element-vir/vira/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:S`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:v`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${O.assign({icon:Kr,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `,errorSlot:v`
                    <div
                        style=${S`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${O.assign({icon:cs,fitContainer:!0})}
                            style=${S`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${O}>
                    </div>
                `}].forEach(n=>{e({title:n.title,styles:S`
                    ${Ut} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${n.styles||S``}
                    }

                    ${n.allowReload?S`
                              ${Ut} {
                                  cursor: pointer;
                              }

                              ${Ut}:hover {
                                  border-color: #0055ff;
                              }
                          `:S``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,stateInitStatic:{imageUrl:n.inputs.imageUrl},render({state:r,updateState:i}){return v`
                        <${Ut.assign({...n.inputs,imageUrl:r.imageUrl})}
                            ${Q("click",()=>{n.allowReload&&i({imageUrl:`${n.inputs.imageUrl}?di=${rh()}`})})}
                        >
                            ${n.loadingSlot?v`
                                      <div class="slot-wrapper" slot=${Ut.slotNames.loading}>
                                          ${n.loadingSlot}
                                      </div>
                                  `:""}${n.errorSlot?v`
                                      <div class="slot-wrapper" slot=${Ut.slotNames.error}>
                                          ${n.errorSlot}
                                      </div>
                                  `:""}
                        </${Ut}>
                    `}})})}}),qA=ft({title:se.tagName,parent:sn,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:Y.Color,initValue:se.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:Y.Color,initValue:se.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:Y.Color,initValue:se.cssVars["vira-input-border-color"].default},"Focus color":{controlType:Y.Color,initValue:se.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:Y.Color,initValue:se.cssVars["vira-input-text-selection-color"].default}},defineExamples({defineExample:e}){function t({styles:r,title:i,inputs:s}){e({title:i,styles:S`
                    ${r||S``}
                `,stateInitStatic:{value:s.value},render({state:o,updateState:a,controls:u}){const l={[String(se.cssVars["vira-input-text-color"].name)]:u["Text color"],[String(se.cssVars["vira-input-placeholder-color"].name)]:u["Placeholder color"],[String(se.cssVars["vira-input-border-color"].name)]:u["Border color"],[String(se.cssVars["vira-input-focus-border-color"].name)]:u["Focus color"],[String(se.cssVars["vira-input-text-selection-color"].name)]:u["Selection color"]},f=pe(l,(d,p)=>p||"inherit"),c=Object.entries(f).map(([d,p])=>[d,p].join(": ")+";").join(`
`);return v`
                        <${se.assign({...s,value:o.value})}
                            style=${c}
                            ${Q(se.events.valueChange,d=>{a({value:d.detail})})}
                        ></${se}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:St}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:S`
                    ${se} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:St}},{title:"taller height",styles:S`
                    ${se} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:St}},{title:"shorter height",styles:S`
                    ${se} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:St}},{title:"max width",styles:S`
                    ${se} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:S`
                    ${se} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:fp.Password}}].forEach(t)}}),jA=ft({title:Mi.tagName,parent:sn,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:Y.Color,initValue:""},"Hover color":{controlType:Y.Color,initValue:""}},defineExamples({defineExample:e}){function t({title:n,inputs:r}){e({title:n,render({controls:i}){const s=S`
                        ${Mi.cssVars["vira-link-hover-color"].name}: ${ue(i["Hover color"]||"inherit")};
                        color: ${ue(i["CSS Color"]||"inherit")};
                    `;return v`
                        <${Mi.assign(r)} style=${s}>My Link</${Mi}>
                    `}})}t({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),t({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(n,r){return console.info(n,r),!1}}}}})}}),zA=[sn,OA,yu,_A,VA,LA,RA,UA,WA,qA,jA].sort((e,t)=>e.title.localeCompare(t.title));Us({tagName:"vira-book-app",styles:S`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${qo} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,render(){return v`
            <${qo.assign({internalRouterConfig:{basePath:du("element-vir","vira"),useInternalRouter:!0},pages:zA,themeColor:"#33ccff"})}>
                <h1 slot=${kt.NavHeader}>Vira</h1>
            </${qo}>
        `}});
